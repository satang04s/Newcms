const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ali_cmbonus_b', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    status_pv: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    rcode: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    fdate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    tdate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    mcode: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    status: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    pv: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    pvb: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    pvh: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    total: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    dmbonus: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    embonus: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    totaly: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    tot_vat: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    tot_tax: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    mdate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    month_pv: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    mpos: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    c_note1: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    c_note2: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    c_note3: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    c_note4: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    c_note5: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    c_transfer: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    c_remark: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    sms_credits: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    paydate: {
      type: DataTypes.STRING(255),
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
    voucher: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    mtype: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    com_transfer_chagre: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    name_f: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    name_t: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    id_card: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    id_tax: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    vip: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    bankcode: {
      type: DataTypes.STRING(5),
      allowNull: false
    },
    acc_no: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    acc_name: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    branch: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    mobile: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    cmp: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    cmp2: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    member_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ali_cmbonus_b',
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
        name: "mcode",
        using: "BTREE",
        fields: [
          { name: "mcode" },
        ]
      },
      {
        name: "status",
        using: "BTREE",
        fields: [
          { name: "status" },
        ]
      },
      {
        name: "rcode",
        using: "BTREE",
        fields: [
          { name: "rcode" },
        ]
      },
      {
        name: "fdate",
        using: "BTREE",
        fields: [
          { name: "fdate" },
        ]
      },
      {
        name: "tdate",
        using: "BTREE",
        fields: [
          { name: "tdate" },
        ]
      },
      {
        name: "paydate",
        using: "BTREE",
        fields: [
          { name: "paydate" },
        ]
      },
      {
        name: "ali_cmbonus_b_member_id_fa2dff42",
        using: "BTREE",
        fields: [
          { name: "member_id" },
        ]
      },
    ]
  });
};
