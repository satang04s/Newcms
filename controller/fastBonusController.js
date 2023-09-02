const models = require("../models/index")
const {Sequelize, QueryTypes, col} = require("sequelize")
// const Op = sequelize.Op
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

const FACTOR = {
  1: 1.5,
  2: 0.3,
  3: 0.1,
  4: 0.1,
  5: 0.1,
}

exports.getFastBonus = async (req, res, next) => {
  const startDate = "2023-06-01"
  const endDate = "2023-06-07"
  const totalPv = await sequelize.query(
    `
    SELECT tb.mcode, SUM( tb.tot_pv ) AS totalPv , COUNT(tb.mcode) as totalT , am.sp_code ,am.pos_cur FROM (
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
    SELECT mcode, SUM(tot_pv) as totalPv FROM (
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
    if (item.totalPv >= 100) {
      salesMaintain[item.mcode] = item.totalPv
    }
  })

  console.log('salesMaintain', salesMaintain)

  const selectorCustomer = await models.ali_member.findAll({
    attributes: [
      "mcode",
      "sp_code",
      "upa_code",
      "lr",
      "pos_cur",
      "name_t",
      "status_terminate",
      "mdate",
    ],
  })

  const startTime = moment()
  const dataPool = {
    members: {},
    salesMaintain,
    allTotalFastBo: [],
    am_bonus:[]
  }
  // const allTotalFastBo = []
  for(let i of totalPv ){
    dataPool.allTotalFastBo.push(
      getPartSp(i, selectorCustomer, salesMaintain, 1, i.totalPv, 1)
    )
  }
  // totalPv.map((value) => {
  //   // const cus = selectorCustomer.find((c) => c.mcode === value.mcode)
  //   allTotalFastBo.push(
  //     getPartSp(value, selectorCustomer, salesMaintain, 1, value.tot_pv, 1)
  //   )
  // })

  // const allKeys = Object.keys(totalPv)
  // for (let x of allKeys) {
  //   const item = totalPv[x]
  //   let selectMember = dataPool.members[x]

  //   if (selectMember === undefined) {
  //     const memberQuery = await models.ali_member.findOne({
  //       where: {mcode: item.mcode},
  //     })
  //     dataPool.members[x] = memberQuery.dataValues
  //     selectMember = memberQuery.dataValues
  //   }

  //   dataPool.allTotalFastBo.push(
  //     await getPartSpOne(item, selectMember, dataPool, 1, item.tot_pv, 1)
  //   )
  // }

  const endTime = moment()
  const duration = endTime.diff(startTime, "seconds")
  console.log("duration >>>>> ", duration)
  // console.log("dataPool.allTotalFastBo >>>>> ", dataPool.allTotalFastBo)
  const sumBySpCode = {}
  let sum = 0
  dataPool.allTotalFastBo.forEach((entry) => {
    Object.values(entry).forEach((subEntry) => {
      const spCode = subEntry.sp_code
      const fbo = subEntry.fbo
      sum += fbo
      if (fbo != 0) {
        if (sumBySpCode.hasOwnProperty(spCode)) {
          sumBySpCode[spCode].fbo += fbo
        } else {
          sumBySpCode[spCode] = {fbo: fbo}
        }
      }
    })
  })
  // allTotalFastBo.forEach((entry) => {
  //   Object.values(entry).forEach((subEntry) => {
  //     const spCode = subEntry.sp_code
  //     const fbo = subEntry.fbo
  //     sum += fbo
  //     if (fbo != 0) {
  //       if (sumBySpCode.hasOwnProperty(spCode)) {
  //         sumBySpCode[spCode].fbo += fbo
  //       } else {
  //         sumBySpCode[spCode] = {fbo: fbo}
  //       }
  //     }
  //   })
  // })
  // const resultArray = []
  // for (const upaCode in sumBySpCode) {
  //   resultArray.push({
  //     upa_code: upaCode,
  //     fbo: sumBySpCode[upaCode].fbo,
  //   })
  // }
  for (const spCode in sumBySpCode) {
    dataPool.am_bonus.push({
      sp_code: spCode,
      fbo: sumBySpCode[spCode].fbo,
    })
  }
  res.status(200).json({
    sum: sum,
    // salesMaintain:salesMaintain,
    allTotalFastBo: dataPool.allTotalFastBo,
    // fastBo: dataPool.am_bonus,
  })
}

async function getPartSpOne(val, member, dataPool, level = 1, tot_pv, gen = 1) {
  let path = {}
  if (member.sp_code !== "" && level <= 5) {
    const sponsorCode = member.sp_code
    let selectMember = dataPool.members[sponsorCode]
    if (dataPool.members[sponsorCode] === undefined) {
      const memberQuery = await models.ali_member.findOne({
        where: {mcode: sponsorCode},
      })
      dataPool.members[sponsorCode] = memberQuery.dataValues
      selectMember = memberQuery.dataValues
    }
    const salesMaintain = dataPool.salesMaintain[selectMember.mcode];
    path[member.mcode] = {
      level: level,
      gen: gen,
      sp_code: selectMember.mcode,
      fbo: 0,
    }
    if (
      selectMember.status_terminate != 1 &&
      salesMaintain !== undefined &&
      selectMember.pos_cur === "VIP"
    ) {
      path[member.mcode].fbo += tot_pv * FACTOR[level]
      level += 1
    }
    // console.log('path >>>>>>>> ', path)
    const recursivePath = await getPartSpOne(
      val,
      selectMember,
      dataPool,
      level,
      tot_pv,
      gen + 1
    )
    Object.assign(path, recursivePath)
  }

  return path
}

function getPartSp(val, data, salesMaintain, level = 1, tot_pv, gen = 1) {
  let path = {}
  if (val.sp_code !== "" && level <= 5) {
    path[val.mcode] = {
      level: level,
      gen: gen,
      sp_code: val.sp_code,
      fbo: 0,
    }
    if (
      val.status_terminate != 1 &&
      salesMaintain[val.sp_code] &&
      val.pos_cur === "VIP"
    ) {
      path[val.mcode].fbo += tot_pv * FACTOR[level]
      level += 1
    }
    const sp = data.find((s) => s.mcode === val.sp_code)
    const recursivePath = getPartSp(
      sp,
      data,
      salesMaintain,
      level,
      tot_pv,
      gen + 1
    )
    Object.assign(path, recursivePath)
  }

  return path
}
