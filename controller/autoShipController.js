const models = require("../models/index")
const {Sequelize, QueryTypes, col} = require("sequelize")
const Op = Sequelize.Op

const env = process.env.NODE_ENV || "development"
const config = require(__dirname + "/../config/config.json")[env]

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
)

exports.autoShip = async (req, res, next) => {
  const rcode = 321

  const all_data = await sequelize.query(
    `SELECT rcode, mcode, bonus, 'am' AS type  FROM ali_ambonus  
    WHERE rcode = :rcode  AND bonus > 0 
    UNION ALL
    SELECT rcode, mcode, total AS bonus, 'bm' AS type FROM ali_bmbonus 
    WHERE rcode = :rcode  AND total > 0`,
    {
      replacements: {rcode},
      type: sequelize.QueryTypes.SELECT,
    }
  )

  const dataMember = all_data.reduce(
    (arr, obj) => (arr.push(obj.mcode), arr),
    []
  )
  const member = await models.ali_member.findAll({
    attributes: ["id", "mcode", "atocom"],
    where: {
      mcode: {
        [Op.in]: dataMember,
      },
    },
  })

  const data = []
  all_data.reduce((obj, value) => {
    const selectMember = member.find((m) => m.mcode === value.mcode)
    if (!obj[value.mcode]) {
      obj[value.mcode] = {
        mcode: value.mcode,
        bonus: 0,
        atocom: selectMember.atocom,
      }
      data.push(obj[value.mcode])
    }
    obj[value.mcode].bonus += parseFloat(value.bonus)

    if (obj[value.mcode].atocom + parseFloat(value.bonus) * 0.05 < 4400) {
      obj[value.mcode].atocom += parseFloat(value.bonus) * 0.05
    } else {
      obj[value.mcode].atocom = 4400
    }
    return obj
  })

  res.status(200).json({
    data,
  })
}
