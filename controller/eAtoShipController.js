const models = require("../models/index")
const Sequelize = require("sequelize")
const Op = Sequelize.Op
const moment = require("moment")
const {getSaleMaintain} = require("./service/sale-maintain")

exports.eAuto = async (req, res, next) => {
  const startDate = "2023-06-01"
  const endDate = "2023-06-30"
  const salesMaintain = await getSaleMaintain(endDate);
  // const startTime = moment()

  // const eato = await models.ali_eatoship.findAll({
  //     where : {
  //         sadate : {[Op.between] : "2023-06"}
  //     }
  // })

  // const endTime = moment()
  // const duration = endTime.diff(startTime, "seconds")
  // console.log("duration >>>>> ", duration)

  res.status(200).json({
    salesMaintain:salesMaintain
    // result: result,
  })
}
