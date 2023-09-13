const models = require("../models/index")
const {Sequelize} = require("sequelize")
const Op = Sequelize.Op

exports.fnc_calc_stamp_wallet = async (req, res, next) => {
  const ro = 331
  const fdate = "2023-08-15"
  const tdate = "2023-06-21"
  const member = await models.ali_member.findAll({
    attributes: ["mcode", "ewallet", "voucher", "eatoship"],
    where: {
      status_terminate: 0,
      [Op.or]: [
        {ewallet: {[Op.gt]: 0}},
        {voucher: {[Op.gt]: 0}},
        {eatoship: {[Op.gt]: 0}},
      ],
    },
  })

  member.map(async (obj) => {
    await models.ali_log_wallet.create({
      rcode: ro,
      fdate: fdate,
      tdate: tdate,
      mcode: obj.dataValues.mcode,
      ewallet: obj.dataValues.ewallet,
      evoucher: obj.dataValues.voucher,
      eautoship: obj.dataValues.eatoship,
      ecom: 0
    })
  })
  res.status(200).json({
    member,
  })
}
