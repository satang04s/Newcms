const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ali_isaleh', {
    sano: {
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
    sadate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    sctime: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    inv_code: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    lid: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    inv_from: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    mcode: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    total: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    tot_pv: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    tot_bv: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    tot_fv: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    usercode: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    remark: {
      type: DataTypes.STRING(40),
      allowNull: true
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
    txtoption: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    chkCash: {
      type: DataTypes.STRING(255),
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
    chkInternet: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    chkDiscount: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    chkOther: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    txtCash: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "0"
    },
    txtFuture: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "0"
    },
    txtTransfer: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "0"
    },
    ewallet: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    txtCredit1: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "0"
    },
    txtCredit2: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "0"
    },
    txtCredit3: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "0"
    },
    txtInternet: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    txtDiscount: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    txtOther: {
      type: DataTypes.STRING(255),
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
    optionInternet: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    optionDiscount: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    optionOther: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    discount: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    sender: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    sender_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    receive: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    receive_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    print: {
      type: DataTypes.INTEGER,
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
    ewallett_before: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    ewallett_after: {
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
    mbase: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    bprice: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    locationbase: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    crate: {
      type: DataTypes.DECIMAL(11,6),
      allowNull: false
    },
    checkportal: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    uid_receive: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    uid_sender: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    caddress: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    cdistrictId: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    camphurId: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    cprovinceId: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    czip: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'ali_isaleh',
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
          { name: "tot_pv" },
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
          { name: "tot_pv" },
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
      {
        name: "ewallett_before",
        using: "BTREE",
        fields: [
          { name: "ewallet_before" },
        ]
      },
    ]
  });
};
