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

  // const sumAsaleh = await models.ali_asaleh.findAll({
  //   attributes: [
  //     "mcode",
  //     [Sequelize.fn("SUM", Sequelize.col("tot_pv")), "tot_pv"],
  //   ],
  //   where: {
  //     sadate: {
  //       [Op.between]: [
  //         `${moment("2023-08-08").format("YYYY-MM-DD")} 00:00:00`,
  //         `${moment("2023-08-14").format("YYYY-MM-DD")} 23:59:59`,
  //       ],
  //     },
  //   },
  //   group: ["mcode"],
  //   order: [["mcode", "desc"]],
  // })

  // const sumHoldHead = await models.ali_holdhead.findAll({
  //   attributes: [
  //     "mcode",
  //     [Sequelize.fn("SUM", Sequelize.col("tot_pv")), "total_pv"],
  //   ],
  //   where: {
  //     sadate: {
  //       [Op.between]: [
  //         `${moment("2023-08-08").format("YYYY-MM-DD")} 00:00:00`,
  //         `${moment("2023-08-14").format("YYYY-MM-DD")} 23:59:59`,
  //       ],
  //     },
  //   },
  //   group: ["mcode"],
  //   order: [["mcode", "desc"]],
  // })

  // const result = sumAsaleh.concat(sumHoldHead)
  // const member = result.reduce((arr, obj) => (arr.push(obj.mcode), arr),
  // [])

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

  // const result = apv_data
  // const selectorCustomer = executiveMember
  const startTime = moment()
  const allTotalWeak = []
  result.map((value) => {
    allTotalWeak.push(getPartUp(value, selectorCustomer,salesMaintain, 1, value.tot_pv, 1))
  })
  const endTime = moment()
  const duration = endTime.diff(startTime, "seconds")
  console.log("duration >>>>> ", duration)
      // result.apvData.map((value) => {
      //     const cus = selectorCustomer.executiveMember.find((c) => c.mcode === value.mcode)
      //     allTotalWeak.push(getPartUp(cus, selectorCustomer.executiveMember, 1, value.tot_pv, 1))
      //   })

  // console.log('allTotalWeak >>>>> ', allTotalWeak)
  // const sumByUpaCode = {}
  // allTotalWeak.forEach((entry) => {
  //   Object.values(entry).forEach((subEntry) => {
  //     const upa_code = subEntry.upa_code
  //     const total_l = parseInt(subEntry.total_l)
  //     const total_r = parseInt(subEntry.total_r)
  //     // console.log("upa_code R",upa_code)
  //     // console.log("total R",total_r)
  //     if (sumByUpaCode.hasOwnProperty(upa_code)) {
  //       sumByUpaCode[upa_code].total_l += total_l
  //       sumByUpaCode[upa_code].total_r += total_r
  //     } else {
  //       sumByUpaCode[upa_code] = {
  //         total_l: total_l,
  //         total_r: total_r,
  //       }
  //     }
  //   })
  // })
  const startTimeB = moment()
  const sumByUpaCode = {}

  allTotalWeak.forEach((dataset) => {
    for (const key in dataset) {
      const entry = dataset[key]
      const upaCode = entry.upa_code
      const totalL = parseInt(entry.total_l)
      const totalR = parseInt(entry.total_r)

        if (sumByUpaCode[upaCode]) {
          sumByUpaCode[upaCode].total_l += totalL
          sumByUpaCode[upaCode].total_r += totalR
        } else {
          sumByUpaCode[upaCode] = {total_l: totalL, total_r: totalR}
        }
      
    }
  })

  const resultArray = []

  for (const upaCode in sumByUpaCode) {
    resultArray.push({
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

  const old_data = await models.ali_bmbonus.findAll({
    attributes: ["mcode", "carry_l", "carry_c"],
    where: {
      rcode: 320,
    },
  })
  resultArray.map(async (a) => {
    const old_pv = old_data.find((e) => e.mcode === a.mcode)
    if (old_pv) {
      a.total_l += parseInt(old_pv.carry_l)
      a.total_r += parseInt(old_pv.carry_c)
      a.old_pvL += parseInt(old_pv.carry_l)
      a.old_pvR += parseInt(old_pv.carry_c)
      a.balance +=
        a.new_pvL + old_pv.carry_l < a.new_pvR + old_pv.carry_c
          ? a.new_pvL + parseInt(old_pv.carry_l)
          : a.new_pvR + parseInt(old_pv.carry_c)
    }
  })
  const endTimeB = moment()
  const durationB = endTimeB.diff(startTimeB, "seconds")
  console.log("durationB >>>>> ", durationB)
  res.status(200).json({
    length: resultArray.length,
    resultArray: resultArray,
    // allTotalWeak:allTotalWeak,
    // sumByUpaCode:sumByUpaCode,
    // sumByUpaCode: sumByUpaCode,
  })
}

function getPartUp(val, data,salesMaintain, level = 1, tot_pv, gen = 1) {
  let path = {}
  // const upToSp = data.filter((s) => s.sp_code === val.upa_code)
  if (val.upa_code !== "") {
    // if (getLrBySpCode(upToSp)) {
      path[val.mcode] = {
        gen: gen,
        mcode: val.mcode,
        upa_code: val.upa_code,
        name: val.name_t,
        lr: val.lr,
        total_l: 0,
        total_r: 0,
      }
      // if (val.status_terminate != 1 &&
      //   salesMaintain[val.sp_code] &&
      //   val.pos_cur === "VIP") {
        if (val.lr === "1") {
          path[val.mcode].total_l += tot_pv
        } else {
          path[val.mcode].total_r += tot_pv
        }
      // }
    // }
    const up = data.find((s) => s.mcode === val.upa_code)
    const recursivePath = getPartUp(up, data,salesMaintain,level, tot_pv, gen + 1)
    Object.assign(path, recursivePath)
  }
  return path
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
