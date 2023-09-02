const models = require("../models/index")
const {Sequelize, QueryTypes, col} = require("sequelize")
const Op = Sequelize.Op
const moment = require("moment")
const apv_data = require("../mockData/apv_data")
const executiveMember = require("../mockData/executive_member_data")

const env = process.env.NODE_ENV || "development"
const config = require(__dirname + "/../config/config.json")[env]

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
)

exports.getBalance = async (req, res, next) => {
  const startDate = "2023-06-01"
  const endDate = "2023-06-07"
  const result = await sequelize.query(
    `
    SELECT tb.mcode, SUM( tb.tot_pv ) AS tot_pv , am.sp_code ,am.pos_cur ,am.upa_code FROM (
      SELECT mcode, SUM(tot_pv) as tot_pv FROM ali_asaleh 
      WHERE sadate >= :startDate AND sadate <= :endDate AND sa_type IN ('A', 'Z') AND cancel = 0 GROUP BY mcode 
      UNION ALL 
      SELECT mcode, SUM(tot_pv) as tot_pv FROM ali_holdhead 
      WHERE sadate >= :startDate AND sadate <= :endDate AND (sa_type IN ('A', 'AE', 'AM')) AND cancel = 0 GROUP BY mcode 
    ) as tb 
    LEFT JOIN ali_member as am on am.mcode = tb.mcode
    GROUP BY mcode
    `,
    {
      replacements: {startDate, endDate},
      type: sequelize.QueryTypes.SELECT,
    }
  )

  const totalMountPv = await sequelize.query(
    `
    SELECT mcode, SUM(tot_pv) as tot_pv FROM (
      SELECT mcode, SUM(tot_pv) as tot_pv FROM ali_asaleh 
      WHERE sadate >= :startDate AND sadate <= :endDate AND sa_type IN ('A', 'Z') AND cancel = 0 GROUP BY mcode 
      UNION ALL 
      SELECT mcode, SUM(tot_pv) as tot_pv FROM ali_holdhead 
      WHERE sadate >= :startDate AND sadate <= :endDate AND (sa_type IN ('A', 'AE', 'AM')) AND cancel = 0 GROUP BY mcode 
    ) as tb 
    GROUP BY mcode
    `,
    {
      replacements: {startDate, endDate},
      type: sequelize.QueryTypes.SELECT,
    }
  )

  const salesMaintain = {}
  totalMountPv.map((item) => {
    if (item.tot_pv >= 100) {
      salesMaintain[item.mcode] = item.tot_pv
    }
  })

  const old_data = await models.ali_bmbonus.findAll({
    attributes: ["mcode", "carry_l", "carry_c"],
    where: {
      rcode: 320,
    },
  })
  // const result = apv_data
  // const selectorCustomer = executiveMember
  const startTime = moment()
  //   const allTotalWeak = {}
  let level = 1
  let gen = 1
  const dataPool = {
    members: {},
    allTotalWeak: [],
    resultArray: [],
  }
  const allKeys = Object.keys(result)
  for (let x of allKeys) {
    level += 1
    const item = result[x]
    let selectMember = dataPool.members[x]
    if (selectMember === undefined) {
      const memberQuery = await models.ali_member.findOne({
        where: {mcode: item.mcode},
      })
      dataPool.members[x] = memberQuery.dataValues
      selectMember = memberQuery.dataValues
    }
    await getPartUp(item, selectMember, item.tot_pv, gen, dataPool)
  }
  const endTime = moment()
  const duration = endTime.diff(startTime, "seconds")
  console.log("duration >>>>> ", duration)

const startTimeA = moment()

const selectorCustomer = await models.ali_member.findAll({
  attributes: [
    "id",
    "mcode",
    "sp_code",
    "upa_code",
    "lr",
    "pos_cur",
    "name_t",
    "status_terminate",
  ],
})

  const sumByUpaCode = {}
  dataPool.allTotalWeak.forEach((dataset) => {
    const upaCode = dataset.up_code
    const totalL = parseFloat(dataset.pv_l)
    const totalR = parseFloat(dataset.pv_r)
    // const upToSp = selectorCustomer.filter((s) => s.sp_code === upaCode)
    const member = dataPool.members[upaCode]
    // if (
      // getLrBySpCode(upToSp) 
      // && 
      // member.status_terminate != 1 
      // && salesMaintain[upaCode] 
      // && member.pos_cur === "VIP"
    // ) {
      if (sumByUpaCode[upaCode]) {
        sumByUpaCode[upaCode].total_l += totalL
        sumByUpaCode[upaCode].total_r += totalR
      } else {
        sumByUpaCode[upaCode] = {total_l: totalL, total_r: totalR}
      }
    // }
  })

  for (const upaCode in sumByUpaCode) {
    dataPool.resultArray.push({
      mcode: upaCode,
      new_pvL: sumByUpaCode[upaCode].total_l,
      new_pvR: sumByUpaCode[upaCode].total_r,
      old_pvL: 0,
      old_pvR: 0,
      total_l: sumByUpaCode[upaCode].total_l,
      total_r: sumByUpaCode[upaCode].total_r,
      balance: 0,
    })
  }

  dataPool.resultArray.map((a) => {
    const old_pv = old_data.find((e) => e.mcode === a.mcode)
    if (old_pv) {
      a.total_l += parseInt(old_pv.carry_l)
      a.total_r += parseInt(old_pv.carry_c)
      a.old_pvL += parseInt(old_pv.carry_l)
      a.old_pvR += parseInt(old_pv.carry_c)
      a.balance +=
        a.new_pvL + old_pv.carry_l < a.new_pvR + old_pv.carry_c
          ? (a.new_pvL + parseInt(old_pv.carry_l))*0.6
          : (a.new_pvR + parseInt(old_pv.carry_c))*0.6
    }
  })

  const endTimeA = moment()
  const durationA = endTimeA.diff(startTimeA, "seconds")
  console.log("durationAAA >>>>> ", durationA)

  //   const resultArray = []

  //   for (const upaCode in dataPool.allTotalWeak) {
  //     resultArray.push({
  //       mcode: dataPool.allTotalWeak[upaCode].mcode,
  //       upaCode: upaCode,
  //       pv: dataPool.allTotalWeak[upaCode].pv,
  //     })
  //   }

  res.status(200).json({
    // level: level,
    // gen: gen,
    // dataPool: dataPool.allTotalWeak,
    length: dataPool.resultArray.length,
    resultArray: dataPool.resultArray,
  })
}

const getPartUp = async (source, member, tot_pv, gen, dataPool) => {
  gen += 1
  if (member.upa_code != "") {
    const sponsorCode = member.upa_code
    let selectMember = dataPool.members[sponsorCode]
    if (dataPool.members[sponsorCode] === undefined) {
      const memberQuery = await models.ali_member.findOne({
        where: {mcode: sponsorCode},
      })
      dataPool.members[sponsorCode] = memberQuery.dataValues
      selectMember = memberQuery.dataValues
    }
    dataPool.allTotalWeak.push({
      mcode: source.mcode,
      up_code: selectMember.mcode,
      pv_l: member.lr == 1 ? tot_pv : 0,
      pv_r: member.lr == 2 ? tot_pv : 0,
      lr: member.lr,
    })

    await getPartUp(source, selectMember, tot_pv, gen, dataPool)
  }

  return
}

function getLrBySpCode(data) {
  const count_L = data.filter((s) => s.lr == 1)
  const count_R = data.filter((s) => s.lr != 1)
  if (count_L.length > 0 && count_R.length > 0) {
    return true
  } else {
    return false
  }
}
