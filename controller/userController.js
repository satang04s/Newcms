const models = require("../models/index")
const {Sequelize, QueryTypes, col} = require("sequelize")
const Op = Sequelize.Op
const moment = require("moment")

exports.getUser = async (req, res, next) => {
  const sumAsaleh = await models.ali_asaleh.findAll({
    attributes: [
      "mcode",
      [Sequelize.fn("SUM", Sequelize.col("tot_pv")), "tot_pv"],
    ],
    where: {
      sadate: {
        [Op.between]: [
          `${moment("2023-08-11").format("YYYY-MM-DD")} 00:00:00`,
          `${moment("2023-08-11").format("YYYY-MM-DD")} 23:59:59`,
        ],
      },
    },
    group: ["mcode"],
    order: [["mcode", "desc"]],
  })

  const sumHoldHead = await models.ali_holdhead.findAll({
    attributes: [
      "mcode",
      [Sequelize.fn("SUM", Sequelize.col("tot_pv")), "tot_pv"],
    ],
    where: {
      sadate: {
        [Op.between]: [
          `${moment("2023-08-11").format("YYYY-MM-DD")} 00:00:00`,
          `${moment("2023-08-11").format("YYYY-MM-DD")} 23:59:59`,
        ],
      },
    },
    group: ["mcode"],
    order: [["mcode", "desc"]],
  })

  const result =[]
  // const result = [
  //   { mcode: 'TH0000025', tot_pv: 200 },
  //   { mcode: 'TH0000024', tot_pv: 200 },
  //   { mcode: 'TH0000023', tot_pv: 200 },
  //   { mcode: 'TH0000022', tot_pv: 1500200 },
  //   { mcode: 'TH0000021', tot_pv: 200 },
  //   { mcode: 'TH0000020', tot_pv: 200 },
  //   { mcode: 'TH0000019', tot_pv: 1500200 },
  //   { mcode: 'TH0000018', tot_pv: 200 },
  //   { mcode: 'TH0000017', tot_pv: 200 },
  //   { mcode: 'TH0000016', tot_pv: 700200 },
  //   { mcode: 'TH0000015', tot_pv: 200 },
  //   { mcode: 'TH0000014', tot_pv: 200 },
  //   { mcode: 'TH0000013', tot_pv: 200 },
  //   { mcode: 'TH0000012', tot_pv: 200 },
  //   { mcode: 'TH0000011', tot_pv: 200 },
  //   { mcode: 'TH0000010', tot_pv: 700200 },
  //   { mcode: 'TH0000009', tot_pv: 1500200 },
  //   { mcode: 'TH0000008', tot_pv: 200 },
  //   { mcode: 'TH0000007', tot_pv: 200 },
  //   { mcode: 'TH0000006', tot_pv: 200 },
  //   { mcode: 'TH0000005', tot_pv: 200 },
  //   { mcode: 'TH0000004', tot_pv: 200 },
  //   { mcode: 'TH0000003', tot_pv: 200 },
  //   { mcode: 'TH0000002', tot_pv: 5000 }
  // ]

  sumHoldHead.reduce((obj, value) => {
    const selector = sumAsaleh.find((m) => m.mcode === value.mcode)
    if (selector) {
      if (!obj[value.mcode]) {
        obj[value.mcode] = {
          mcode: value.mcode,
          tot_pv: selector.tot_pv + value.tot_pv,
        }
        result.push(obj[value.mcode])
      }
      return obj
    } else {
      if (!obj[value.mcode]) {
        obj[value.mcode] = {
          mcode: value.mcode,
          tot_pv: value.tot_pv,
        }
        result.push(obj[value.mcode])
      }
      return obj
    }
  }, {})

  const selectorCustomer = await models.ali_member.findAll({
    attributes: [
      "mcode",
      "sp_code",
      "upa_code",
      "lr",
      "pos_cur",
      "name_t",
      "status_terminate"
    ],
  })

  const allTotalFastBo = []
// console.log('result', result)
  result.map((value) => {
    const cus = selectorCustomer.find((c) => c.mcode === value.mcode)
    // const spon = selectorCustomer.find((s) => s.mcode === cus.sp_code)
    allTotalFastBo.push(getPartSp(cus, selectorCustomer,1 ,value.tot_pv,1))

  })
  console.log('allTotalFastBo', allTotalFastBo)
  const sumBySpCode = {};
  allTotalFastBo.forEach((entry) => {
    Object.values(entry).forEach((subEntry) => {
      const spCode = subEntry.sp_code;
      const fbo = subEntry.fbo;
      if (sumBySpCode.hasOwnProperty(spCode)) {
        sumBySpCode[spCode] += fbo;
      } else {
        sumBySpCode[spCode] = fbo;
      }
    });
  });
  res.status(200).json({
    // result:result,
    fastBo:sumBySpCode,
  })
}

function getPartSp(val, data, level = 1,tot_pv ,gen = 1) {
  let path = {};
  if (val.sp_code !== '') {
      path[val.mcode] = {
          level: level,
          gen: gen,
          sp_code : val.sp_code,
          name:val.name_t,
          fbo : 0
      };
      if(val.status_terminate != 1 ){
        switch(level){
          case 1 :path[val.mcode].fbo += tot_pv * 1.50 
          // level+1
          break;
          case 2 :path[val.mcode].fbo += tot_pv * 0.30 
          // level+1
          break;
          case 3 :path[val.mcode].fbo += tot_pv * 0.10 
          // level+1
          break;
          case 4 :path[val.mcode].fbo += tot_pv * 0.10
          // level+1
          break;
          case 5 :path[val.mcode].fbo += tot_pv * 0.10 
          // level+1
          break;
        }
        level+=1
      }
      const sp = data.find((s) => s.mcode === val.sp_code)
      const recursivePath = getPartSp(sp, data, level ,tot_pv ,gen+1);
      Object.assign(path, recursivePath);
  }

  return path;
}


exports.getBalance = async(req, res, next) => {

  const member_l = await models.ali_bm.findAll({
    attributes: [
      "mcode",
      [Sequelize.fn("SUM", Sequelize.col("pv")), "new_pvL"],
      [Sequelize.literal(0), "new_pvR"],
      "upa_code",
    ],
    where: {
      lr: 1,
    },
    group: ["mcode"],
    order: [["mcode", "desc"]],
  })
 

  res.status(200).json({
    // result:result,
    selectorCustomer:selectorCustomer
  })
}