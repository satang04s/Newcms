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

const FACTOR = {
  1: 1.5,
  2: 0.3,
  3: 0.1,
  4: 0.1,
  5: 0.1,
}

exports.calculateCommission = async (req, res, next) => {
  const startDate = "2023-06-01"
  const endDate = "2023-06-07"
  const result = await sequelize.query(
    `
    SELECT tb.mcode, SUM( tb.tot_pv ) AS tot_pv , am.sp_code ,am.pos_cur ,am.upa_code FROM (
      SELECT mcode, SUM(tot_pv) as tot_pv FROM ali_asaleh 
      WHERE sadate >= :startDate AND sadate <= :endDate AND sa_type IN ('A', 'Z') AND cancel = 0 and tot_pv > 0 GROUP BY mcode 
      UNION ALL 
      SELECT mcode, SUM(tot_pv) as tot_pv FROM ali_holdhead 
      WHERE sadate >= :startDate AND sadate <= :endDate AND (sa_type IN ('A', 'AE', 'AM')) AND cancel = 0 and tot_pv > 0 GROUP BY mcode 
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
      WHERE sadate >= :startDate AND sadate <= :endDate AND (sa_type IN ('A', 'Z', 'AM')) AND cancel = 0 GROUP BY mcode 
    ) as tb where tot_pv >= 100
    GROUP BY mcode
    `,
    {
      replacements: {startDate, endDate},
      type: sequelize.QueryTypes.SELECT,
    }
  )

  const salesMaintain = {}
  let countMaintain = []
  totalMountPv.map((item) => {
    if (item.tot_pv >= 100) {
      countMaintain .push(item.mcode)
      salesMaintain[item.mcode] = item.tot_pv
    }
  })

  const startTime = moment()
  const dataPool = {
    members: {},
    ac: [],
    resultArray: [],
  }
  const allKeys = Object.keys(result)
  for (let x of allKeys) {
    const item = result[x]
    let selectMember = dataPool.members[x]
    if (selectMember === undefined) {
      const memberQuery = await models.ali_member.findOne({
        where: {mcode: item.mcode},
      })
      dataPool.members[x] = memberQuery.dataValues
      selectMember = memberQuery.dataValues
    }
    await getPartUp(item, selectMember, item.tot_pv, 1, dataPool, 1,salesMaintain)
  }
  const endTime = moment()
  const duration = endTime.diff(startTime, "seconds")
  console.log("duration >>>>> ", duration)

  const sumBySpCode = {}
  let sum = 0
  dataPool.ac.forEach((dataset) => {
    const spCode = dataset.sp_code
    const fbo = dataset.pv
    sum += fbo
    if (sumBySpCode[spCode]) {
      sumBySpCode[spCode].fbo += fbo
    } else {
      sumBySpCode[spCode] = {fbo: fbo}
    }
  })

  for (const spCode in sumBySpCode) {
    dataPool.resultArray.push({
      mcode: spCode,
      fbo: sumBySpCode[spCode].fbo,
    })
  }

  res.status(200).json({
    sum: sum,
    resultArray: dataPool.resultArray,
  })
}

const getPartUp = async (
  source,
  member,
  tot_pv,
  gen = 1,
  dataPool,
  level = 1,
  salesMaintain
) => {
  if (member.sp_code != "TH0000001" && member.sp_code != "" && level <= 5) {
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
    const total = tot_pv * factor
    // console.log('first >>>>>>', salesMaintain[member.sp_code])
    if(selectMember.status_terminate != 1 && salesMaintain[member.sp_code] && selectMember.pos_cur === "VIP") {
      dataPool.ac.push({
        mcode: source.mcode,
        sp_code: selectMember.mcode,
        pv: total,
        level: level,
        gen: gen,
      })
      level += 1
    }

    await getPartUp(source, selectMember, tot_pv, gen + 1, dataPool, level ,salesMaintain)
  }
  return
}

