const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ali_holdhead', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    hono: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    sano: {
      type: DataTypes.INTEGER,
      allowNull: true
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
    sa_type: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    inv_code: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    inv_code_to: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    mcode: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    total: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    tot_pv: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    tot_bv: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    tot_sppv: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    tot_fv: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    trnf: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cancel: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: "0"
    },
    remark: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    uid: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    dl: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    print: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    rcode: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    bmcauto: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cancel_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    uid_cancel: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    mbase: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    bprice: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    locationbase: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    name_f: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    name_t: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    crate: {
      type: DataTypes.DECIMAL(11,6),
      allowNull: true
    },
    sp_code: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    sp_pos: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ref: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    status_package: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    remote_ip: {
      type: DataTypes.STRING(64),
      
    },
    member_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    create_user_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ali_holdhead',
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
        name: "tot_pv",
        using: "BTREE",
        fields: [
          { name: "tot_pv" },
        ]
      },
      {
        name: "sadate",
        using: "BTREE",
        fields: [
          { name: "sadate" },
          { name: "sa_type" },
          { name: "mcode" },
          { name: "cancel" },
        ]
      },
      {
        name: "sadate_2",
        using: "BTREE",
        fields: [
          { name: "sadate" },
        ]
      },
      {
        name: "hono",
        using: "BTREE",
        fields: [
          { name: "hono" },
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
        name: "sa_type",
        using: "BTREE",
        fields: [
          { name: "sa_type" },
        ]
      },
      {
        name: "total",
        using: "BTREE",
        fields: [
          { name: "total" },
        ]
      },
      {
        name: "cancel",
        using: "BTREE",
        fields: [
          { name: "cancel" },
        ]
      },
      {
        name: "ali_holdhead_member_id_9020f59a",
        using: "BTREE",
        fields: [
          { name: "member_id" },
        ]
      },
      {
        name: "ali_holdhead_create_user_id_9ca42c26",
        using: "BTREE",
        fields: [
          { name: "create_user_id" },
        ]
      },
    ]
  });
};
