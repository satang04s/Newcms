const models = require("../models/index")
const Sequelize = require("sequelize")
const Op = Sequelize.Op
const moment = require("moment")

exports.openBillAm = async (req, res, next) => {
  const startDate = "2023-06-01"
  const endDate = "2023-06-30"
  const startTime = moment()

  const eato = await models.ali_eatoship.findAll({
    attributes: [
      "mcode",
      [Sequelize.fn("SUM", Sequelize.col("total")), "total"],
      [Sequelize.fn("SUM", Sequelize.col("pv")), "pv"],
    ],
    where: {
      sadate: {[Op.between]: [startDate, endDate]},
    },
    group: ["mcode"],
    raw: true,
    nest: true,
  })

  const holdHead = await models.ali_holdhead.findOne({
    attributes: ["hono"],
    order: [["id", "desc"]],
    raw: true,
    nest: true,
  })

  let holdHead_id = holdHead.hono + 1
  const bill_am = []

  for (let obj of eato) {
    const member = await models.ali_member.findOne({
      attributes: ["id", "mcode", "name_f", "name_t"],
      where: {
        mcode: obj.mcode,
      },
      raw: true,
      nest: true,
    })
    bill_am.push({
      hono: holdHead_id++,
      sadate: new Date(),
      sctime: new Date(),
      sa_type: "AM",
      mcode: obj.mcode,
      total: obj.total,
      tot_pv: obj.pv,
      uid: obj.mcode,
      name_f: member.name_f,
      name_t: member.name_t,
      ref: obj.mcode,
      member_id: member.id,
      create_user_id: member.id,
    })
  }
  await models.ali_holdhead.bulkCreate(bill_am)
  const endTime = moment()
  const duration = endTime.diff(startTime, "seconds")
  console.log("duration >>>>> ", duration)

  res.status(200).json({
    holdHead: holdHead.hono,
    bill_am,
  })
}
