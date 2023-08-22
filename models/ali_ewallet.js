const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ali_ewallet', {
    sano: {
      type: DataTypes.STRING(255),
      allowNull: true,
      unique: "sano_4"
    },
    rcode: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    sadate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    inv_code: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    mcode: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    name_f: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    name_t: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    total: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    usercode: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    remark: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    trnf: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    sa_type: {
      type: DataTypes.CHAR(2),
      allowNull: false
    },
    uid: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    lid: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    dl: {
      type: DataTypes.CHAR(1),
      allowNull: false
    },
    cancel: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    send: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    txtMoney: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    chkCash: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    chkInternet: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    chkFuture: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    chkTransfer: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    chkCredit1: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    chkCredit2: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    chkCredit3: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    chkWithdraw: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    txtDiscount: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    chkTransfer_in: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    chkTransfer_out: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    txtCash: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    txtFuture: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    txtInternet: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    txtTransfer: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    txtCredit1: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    txtCredit2: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    txtCredit3: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    txtWithdraw: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    txtTransfer_in: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    txtTransfer_out: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    optionCash: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    optionFuture: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    optionTransfer: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    optionCredit1: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    optionCredit2: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    optionCredit3: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    optionWithdraw: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    optionTransfer_in: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    optionTransfer_out: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    txtoption: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    ewallet: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    ewallet_before: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    ewallet_after: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    ipay: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    checkportal: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    bprice: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    cancel_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    uid_cancel: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    locationbase: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    chkCommission: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    txtCommission: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    optionCommission: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    mbase: {
      type: DataTypes.STRING(244),
      allowNull: false
    },
    crate: {
      type: DataTypes.DECIMAL(11,6),
      allowNull: false
    },
    echeck: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    sano_temp: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    selectCash: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    selectTransfer: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    selectCredit1: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    selectCredit2: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    selectCredit3: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    optionInternet: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    selectInternet: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    txtTransfer1: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    optionTransfer1: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    selectTransfer1: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    txtTransfer2: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    optionTransfer2: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    selectTransfer2: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    txtTransfer3: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    optionTransfer3: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    selectTransfer3: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    image_transfer: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    txtVoucher: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    id_ecom: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    cals: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    txtPremium: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true,
      defaultValue: 0.00
    },
    chkPremium: {
      type: DataTypes.STRING(8),
      allowNull: true,
      defaultValue: "0"
    },
    selectPremium: {
      type: DataTypes.STRING(8),
      allowNull: true,
      defaultValue: "0"
    },
    optionPremium: {
      type: DataTypes.STRING(128),
      allowNull: true,
      defaultValue: "0"
    },
    chktc: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    optiontc: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    selecttc: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    txttc: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ali_ewallet',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "sano_4",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "sano" },
        ]
      },
      {
        name: "sano",
        using: "BTREE",
        fields: [
          { name: "sano" },
        ]
      },
      {
        name: "sadate",
        using: "BTREE",
        fields: [
          { name: "sadate" },
        ]
      },
      {
        name: "sano_2",
        using: "BTREE",
        fields: [
          { name: "sano" },
        ]
      },
      {
        name: "mcode",
        using: "BTREE",
        fields: [
          { name: "mcode" },
        ]
      },
      {
        name: "mcode_2",
        using: "BTREE",
        fields: [
          { name: "mcode" },
        ]
      },
      {
        name: "sano_3",
        using: "BTREE",
        fields: [
          { name: "sano" },
          { name: "mcode" },
        ]
      },
      {
        name: "sadate_2",
        using: "BTREE",
        fields: [
          { name: "sadate" },
          { name: "mcode" },
        ]
      },
    ]
  });
};
