const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ali_log_ipay', {
    ipayorderid: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    inv_no: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    amount: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    pay_type: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    pay_method: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    resp_code: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    resp_desc: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    coupon_status: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    coupon_serial: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    coupon_password: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    coupon_ref: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    billtype: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'ali_log_ipay',
    timestamps: false
  });
};
