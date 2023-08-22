const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ali_bmbonus', {
    cid: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    rcode: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    mcode: {
      type: DataTypes.STRING(9),
      allowNull: false
    },
    name_t: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    ro_l: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    ro_c: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    ro_r: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    pcrry_l: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    pcrry_c: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    pquota: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    total_pv_ll: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    total_pv_rr: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    total_pv_l: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    total_pv_r: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    carry_l: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    carry_c: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    carry_r: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    quota: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    total: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    percer: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    tax: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    totalamt: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    paydate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: "0000-00-00"
    },
    mpos: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    tdate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    fdate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    pair_stop: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    point: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    status: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    adjust: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    balance: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    cycle_b: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    locationbase: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    crate: {
      type: DataTypes.DECIMAL(15,6),
      allowNull: false
    },
    member_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ali_bmbonus',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "cid" },
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
        name: "carry_l",
        using: "BTREE",
        fields: [
          { name: "carry_l" },
        ]
      },
      {
        name: "carry_c",
        using: "BTREE",
        fields: [
          { name: "carry_c" },
        ]
      },
      {
        name: "quota",
        using: "BTREE",
        fields: [
          { name: "quota" },
        ]
      },
      {
        name: "pair_stop",
        using: "BTREE",
        fields: [
          { name: "pair_stop" },
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
        name: "total",
        using: "BTREE",
        fields: [
          { name: "total" },
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
        name: "ali_bmbonus_member_id_4d62490b",
        using: "BTREE",
        fields: [
          { name: "member_id" },
        ]
      },
    ]
  });
};
