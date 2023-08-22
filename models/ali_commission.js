const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ali_commission', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    mcode: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    name_t: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    ambonus: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    bmbonus: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    dmbonus: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    fmbonus: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    ato: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    ato1: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    total: {
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
    pay: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    sano_ecom: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    sano_ato: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    sano_ewallet: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    tax: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    resale: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true,
      defaultValue: 0.00
    },
    member_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ali_commission',
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
        name: "mcode_2",
        using: "BTREE",
        fields: [
          { name: "mcode" },
          { name: "fdate" },
          { name: "tdate" },
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
        name: "ali_commission_member_id_dcfae569",
        using: "BTREE",
        fields: [
          { name: "member_id" },
        ]
      },
    ]
  });
};
