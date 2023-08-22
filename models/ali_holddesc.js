const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ali_holddesc', {
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
    pcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    pdesc: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    price: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    pv: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    bv: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    fv: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    sppv: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    qty: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    amt: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    bprice: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    uidbase: {
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
    vat: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'ali_holddesc',
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
        name: "hono",
        using: "BTREE",
        fields: [
          { name: "hono" },
        ]
      },
      {
        name: "pcode",
        using: "BTREE",
        fields: [
          { name: "pcode" },
        ]
      },
      {
        name: "pv",
        using: "BTREE",
        fields: [
          { name: "pv" },
        ]
      },
      {
        name: "qty",
        using: "BTREE",
        fields: [
          { name: "qty" },
        ]
      },
    ]
  });
};
