const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ali_cmbonus', {
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
    ewallet: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    fob: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    cycle: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    smb: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    matching: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    onetime: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    atoship: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    ecom: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    ecom_round: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    ecomtranfer: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    total: {
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
    fdate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    tdate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    bankcode: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    member_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ali_cmbonus',
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
        name: "paydate",
        using: "BTREE",
        fields: [
          { name: "paydate" },
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
        name: "ali_cmbonus_member_id_10a47b80",
        using: "BTREE",
        fields: [
          { name: "member_id" },
        ]
      },
    ]
  });
};
