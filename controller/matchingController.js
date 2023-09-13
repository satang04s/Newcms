const models = require("../models/index")
const Sequelize = require("sequelize")
const Op = Sequelize.Op
const moment = require("moment")
const { getSaleMaintain } = require("./service/sale-maintain")

const FACTOR = {
  1: 0.1,
  2: 0.1,
  3: 0.05,
  4: 0.05,
  5: 0.05,
}

exports.calMatching = async (req, res, next) => {
  const ro = 82
  const startDate = "2023-06-01"
  const endDate = "2023-06-30"

  const result = await models.ali_bmbonus.findAll({
    attributes: [
      [Sequelize.literal(ro), "rcode"],
      "mcode",
      "total",
      [Sequelize.fn("SUM", Sequelize.col("total")), "total_pv"],
    ],
    where: {
      fdate: {[Op.gte]: startDate},
      tdate: {[Op.lte]: endDate},
      total: {[Op.gt]: 0},
    },
    include: [
      {
        model: models.ali_member,
        as: "member",
        attributes: ["name_t", "sp_code", "pos_cur"],
      },
    ],
    group: ["mcode"],
  })

  const salesMaintain = await getSaleMaintain(endDate);

  const startTime = moment()

  // const salesMaintain = {}
  // let countMaintain = []
  // result.map((item) => {
  //   if (item.dataValues.total_pv >= 1000) {
  //     countMaintain.push(item.mcode)
  //     salesMaintain[item.dataValues.mcode] = item.dataValues.total_pv
  //   }
  // })

  const dataPool = {
    salesMaintain: salesMaintain,
    members: {},
    dpv: [],
    dc: [],
    dmBonus: [],
  }

  const allKeys = Object.keys(result)
  for (let x of allKeys) {
    const item = result[x].dataValues
    dataPool.dpv.push({
      rcode : item.rcode,
      mcode : item.mcode,
      total_pv: item.total_pv
    })
    let selectMember = dataPool.members[x]
    if (selectMember === undefined) {
      const memberQuery = await models.ali_member.findOne({
        where: {mcode: item.mcode},
      })
      dataPool.members[x] = memberQuery.dataValues
      selectMember = memberQuery.dataValues
    }
    await getPartSp(
      ro,
      startDate,
      endDate,
      item,
      selectMember,
      item.total_pv,
      1,
      dataPool,
      1,
    )
  }

  const sumBySpCode = {}
  dataPool.dc.forEach((dataset) => {
    const upa_code = dataset.upa_code
    const matching = dataset.total
    if (sumBySpCode[upa_code]) {
      sumBySpCode[upa_code].total += matching
    } else {
      sumBySpCode[upa_code] = {
        total: matching,
        name_t: dataset.upa_name,
        fdate: dataset.fdate,
        tdate: dataset.tdate,
        pos_cur: dataset.mposi,
      }
    }
  })

  for (const upa_code in sumBySpCode) {
    let tax = sumBySpCode[upa_code].total * 0.05
    let bonus = sumBySpCode[upa_code].total - tax.toFixed(2)
    dataPool.dmBonus.push({
      rcode: ro,
      mcode: upa_code,
      name_t: sumBySpCode[upa_code].name_t,
      total: sumBySpCode[upa_code].total,
      tax: tax.toFixed(2),
      bonus: bonus,
      fdate: sumBySpCode[upa_code].fdate,
      tdate: sumBySpCode[upa_code].tdate,
      pos_cur: sumBySpCode[upa_code].pos_cur,
    })
  }

  await createResult(ro, dataPool)

  const endTime = moment()
  const duration = endTime.diff(startTime, "seconds")
  console.log("duration >>>>> ", duration)
  // console.log('dataPool.dpv', dataPool.dpv)
  res.status(200).json({
    dataPool: dataPool,
    // result: result,
  })
}

const createResult = async (ro, dataPool) => {
  await models.ali_dpv.bulkCreate(dataPool.dpv)
  await models.ali_dc.bulkCreate(dataPool.dc)
  await models.ali_dmbonus.bulkCreate(dataPool.dmBonus)
}

const getPartSp = async (
  ro,
  startDate,
  endDate,
  source,
  member,
  total_pv,
  gen = 1,
  dataPool,
  level = 1,
) => {
  if (member.sp_code != "" && level <= 5) {
    const sponsorCode = member.sp_code
    let selectMember = dataPool.members[sponsorCode]
    if (dataPool.members[sponsorCode] === undefined) {
      const memberQuery = await models.ali_member.findOne({
        where: {mcode: sponsorCode},
      })
      dataPool.members[sponsorCode] = memberQuery.dataValues
      selectMember = memberQuery.dataValues
    }
    const salesMaintain = dataPool.salesMaintain.includes(selectMember.mcode)

    const factor = FACTOR[level]
    const total = total_pv * factor

    if (
      selectMember.status_terminate != 1 &&
      !salesMaintain &&
      selectMember.pos_cur === "VIP"
    ) {
      dataPool.dc.push({
        rcode: ro,
        mcode: source.mcode,
        name_t: source.member.dataValues.name_t,
        mposi: selectMember.pos_cur,
        upa_code: selectMember.mcode,
        upa_name: selectMember.name_t,
        level: level,
        gen: gen,
        pv: total_pv,
        percer: factor,
        total: total,
        fdate: startDate,
        tdate: endDate,
      })
      level += 1
    }

    await getPartSp(
      ro,
      startDate,
      endDate,
      source,
      selectMember,
      total_pv,
      gen + 1,
      dataPool,
      level
    )
  }
  return
}
