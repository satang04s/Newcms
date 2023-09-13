const models = require("../models/index")
const Sequelize = require("sequelize")
const Op = Sequelize.Op
const moment = require("moment")

const FACTOR = {
  1: 0.1,
  2: 0.1,
  3: 0.05,
  4: 0.05,
  5: 0.05,
}

exports.calMatching = async (req, res, next) => {
  const ro = 81
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
      fdate: {[Op.gte]: "2023-06-01"},
      tdate: {[Op.lte]: "2023-06-30"},
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

  const startTime = moment()

  // const resultSQL = await sequelize.query(
  //   `
  //   SELECT :ro as rcode ,am.name_t,ali_bmbonus.mcode,am.sp_code ,am.pos_cur, SUM(ali_bmbonus.total) AS total_pv FROM ali_bmbonus AS ali_bmbonus
  //   LEFT JOIN ali_member as am on am.mcode = ali_bmbonus.mcode
  //   WHERE ali_bmbonus.fdate >= :startDate AND ali_bmbonus.tdate <= :endDate
  //   AND ali_bmbonus.total > 0 GROUP BY mcode;
  //   `,
  //   {
  //     replacements: {ro , startDate, endDate},
  //     type: sequelize.QueryTypes.SELECT,
  //   }
  // )

  const salesMaintain = {}
  let countMaintain = []
  result.map((item) => {
    if (item.dataValues.total_pv>= 1000) {
      countMaintain.push(item.mcode)
      salesMaintain[item.dataValues.mcode] = item.dataValues.total_pv
    }
  })

  const dataPool = {
    salesMaintain:salesMaintain,
    members: {},
    dpv: result,
    dc: [],
    dmBonus: [],
  }

  const allKeys = Object.keys(result)
  for (let x of allKeys) {
    const item = result[x].dataValues
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
      salesMaintain
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
        name_t: dataset.name_t,
        fdate: dataset.fdate,
        tdate: dataset.tdate,
        pos_cur: dataset.mposi,
      }
    }
  })

  for (const upa_code in sumBySpCode) {
    dataPool.dmBonus.push({
      rcode: ro,
      mcode: upa_code,
      name_t: sumBySpCode[upa_code].name_t,
      total: sumBySpCode[upa_code].total,
      tax: sumBySpCode[upa_code].total * 0.05,
      bonus: sumBySpCode[upa_code].total * 0.95,
      fdate: sumBySpCode[upa_code].fdate,
      tdate: sumBySpCode[upa_code].tdate,
      pos_cur:sumBySpCode[upa_code].pos_cur,
    })
  }

  await createResult(ro ,dataPool);

  const endTime = moment()
  const duration = endTime.diff(startTime, "seconds")
  console.log("duration >>>>> ", duration)

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
  salesMaintain
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
    const factor = FACTOR[level]
    const total = total_pv * factor

    if (
      selectMember.status_terminate != 1 &&
      salesMaintain[member.sp_code] &&
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
      level,
      salesMaintain
    )
  }
  return
}
