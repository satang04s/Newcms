const models = require("../models/index")
const {Sequelize, QueryTypes, col} = require("sequelize")
const Op = Sequelize.Op
const moment = require("moment")
const apv_data = require("../mockData/apv_data")
const executiveMember = require("../mockData/executive_member_data")

exports.getUser = async (req, res, next) => {
  // const sumAsaleh = await models.ali_asaleh.findAll({
  //   attributes: [
  //     "mcode",
  //     [Sequelize.fn("SUM", Sequelize.col("tot_pv")), "tot_pv"],
  //   ],
  //   where: {
  //     sadate: {
  //       [Op.between]: [
  //         `${moment("2023-08-01").format("YYYY-MM-DD")} 00:00:00`,
  //         `${moment("2023-08-07").format("YYYY-MM-DD")} 23:59:59`,
  //       ],
  //     },
  //   },
  //   group: ["mcode"],
  //   order: [["mcode", "desc"]],
  // })

  // const sumHoldHead = await models.ali_holdhead.findAll({
  //   attributes: [
  //     "mcode",
  //     [Sequelize.fn("SUM", Sequelize.col("tot_pv")), "tot_pv"],
  //   ],
  //   where: {
  //     sadate: {
  //       [Op.between]: [
  //         `${moment("2023-08-01").format("YYYY-MM-DD")} 00:00:00`,
  //         `${moment("2023-08-07").format("YYYY-MM-DD")} 23:59:59`,
  //       ],
  //     },
  //   },
  //   group: ["mcode"],
  //   order: [["mcode", "desc"]],
  // })

  // const result = sumAsaleh.concat(sumHoldHead)
  // const selectorCustomer = await models.ali_member.findAll({
  //   attributes: [
  //     "mcode",
  //     "sp_code",
  //     "upa_code",
  //     "lr",
  //     "pos_cur",
  //     "name_t",
  //     "status_terminate",
  //   ],
  // })

  const result = apv_data
  const selectorCustomer = executiveMember
  // console.log('result', result)
  // console.log('selectorCustomer', selectorCustomer)
  const allTotalFastBo = []
  result.apvData.map((value) => {
    const cus = selectorCustomer.executiveMember.find((c) => c.mcode === value.mcode)
    allTotalFastBo.push(getPartSp(cus, selectorCustomer.executiveMember, 1, value.total_pv, 1))
  })
  // console.log("allTotalFastBo", allTotalFastBo)
  const sumBySpCode = {}
  allTotalFastBo.forEach((entry) => {
    Object.values(entry).forEach((subEntry) => {
      const spCode = subEntry.sp_code
      const fbo = subEntry.fbo

      // if(spCode === "TH0000003"){
      //   console.log("fbo fbo", fbo)
      // }
      // console.log("fbo fbo", fbo)

      if (sumBySpCode.hasOwnProperty(spCode)) {
        sumBySpCode[spCode] += fbo
      } else {
        sumBySpCode[spCode] = fbo
      }
    })
  })
  res.status(200).json({
    // allTotalFastBo:allTotalFastBo,
    fastBo: sumBySpCode,
  })
}

exports.getBalance = async (req, res, next) => {
  // const sumAsaleh = await models.ali_asaleh.findAll({
  //   attributes: [
  //     "mcode",
  //     [Sequelize.fn("SUM", Sequelize.col("tot_pv")), "tot_pv"],
  //   ],
  //   where: {
  //     sadate: {
  //       [Op.between]: [
  //         `${moment("2023-08-01").format("YYYY-MM-DD")} 00:00:00`,
  //         `${moment("2023-08-07").format("YYYY-MM-DD")} 23:59:59`,
  //       ],
  //     },
  //   },
  //   group: ["mcode"],
  //   order: [["mcode", "desc"]],
  // })

  // const sumHoldHead = await models.ali_holdhead.findAll({
  //   attributes: [
  //     "mcode",
  //     [Sequelize.fn("SUM", Sequelize.col("tot_pv")), "tot_pv"],
  //   ],
  //   where: {
  //     sadate: {
  //       [Op.between]: [
  //         `${moment("2023-08-01").format("YYYY-MM-DD")} 00:00:00`,
  //         `${moment("2023-08-07").format("YYYY-MM-DD")} 23:59:59`,
  //       ],
  //     },
  //   },
  //   group: ["mcode"],
  //   order: [["mcode", "desc"]],
  // })

  // const result = sumAsaleh.concat(sumHoldHead)

  // const selectorCustomer = await models.ali_member.findAll({
  //   attributes: [
  //     "id",
  //     "mcode",
  //     "sp_code",
  //     "upa_code",
  //     "lr",
  //     "pos_cur",
  //     "name_t",
  //     "status_terminate",
  //   ],
  // })

  const result = apv_data
  const selectorCustomer = executiveMember
  const allTotalWeak = []
  result.apvData.map((value) => {
    const cus = selectorCustomer.executiveMember.find((c) => c.mcode === value.mcode)
    allTotalWeak.push(getPartUp(cus, selectorCustomer.executiveMember, 1, value.total_pv, 1))
  })

  const sumByUpaCode = {}
  allTotalWeak.forEach((entry) => {
    Object.values(entry).forEach((subEntry) => {
      const upa_code = subEntry.upa_code
      const total_l = subEntry.total_l
      const total_r = subEntry.total_r
      // console.log("upa_code R",upa_code)
      // console.log("total R",total_r)
      if (sumByUpaCode.hasOwnProperty(upa_code)) {
        sumByUpaCode[upa_code].total_l += total_l
        sumByUpaCode[upa_code].total_r += total_r
      } else {
        sumByUpaCode[upa_code] = {
          total_l: total_l,
          total_r: total_r,
        }
      }
    })
  })

      // console.log('sumByUpaCode', sumByUpaCode)

  res.status(200).json({
    sumByUpaCode: sumByUpaCode,
  })
}

function getPartUp(val, data, level = 1, tot_pv, gen = 1) {
  let path = {}
  if (val.upa_code !== "") {
    path[val.mcode] = {
      gen: gen,
      upa_code: val.upa_code,
      name: val.name_t,
      lr: val.lr,
      total_l: 0,
      total_r: 0,
    }
    if (val.status_terminate != 1) {
      if (val.lr === "1") {
        path[val.mcode].total_l += tot_pv
      } else {
        path[val.mcode].total_r += tot_pv
      }
    }
    const sp = data.find((s) => s.mcode === val.upa_code)
    const recursivePath = getPartUp(sp, data, level, tot_pv, gen + 1)
    Object.assign(path, recursivePath)
  }

  return path
}

function getPartSp(val, data, level = 1, tot_pv, gen = 1) {
  let path = {}
  if (val.sp_code !== "" && level <= 5) {
    path[val.mcode] = {
      level: level,
      gen: gen,
      sp_code: val.sp_code,
      fbo: 0,
    }
    if (val.status_terminate != 1) {
      switch (level) {
        case 1:
          path[val.mcode].fbo += tot_pv * 1.5
          break
        case 2:
          path[val.mcode].fbo += tot_pv * 0.3
          break
        case 3:
          path[val.mcode].fbo += tot_pv * 0.1
          break
        case 4:
          path[val.mcode].fbo += tot_pv * 0.1
          break
        case 5:
          path[val.mcode].fbo += tot_pv * 0.1
          break
      }
      level += 1
    }
    const sp = data.find((s) => s.mcode === val.sp_code)
    const recursivePath = getPartSp(sp, data, level, tot_pv, gen + 1)
    Object.assign(path, recursivePath)
  }

  return path
}
