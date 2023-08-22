const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ali_asaled', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    sano: {
      type: DataTypes.STRING(7),
      allowNull: true
    },
    sadate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    inv_code: {
      type: DataTypes.STRING(255),
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
    unit: {
      type: DataTypes.STRING(16),
      allowNull: true
    },
    mcode: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    cost_price: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    customer_price: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    price: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    pv: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    bv: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    sppv: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    fv: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    weight: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    qty: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    amt: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    bprice: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    uidbase: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    locationbase: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    outstanding: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    vat: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    sano_link_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ali_asaled',
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
        name: "pcode",
        using: "BTREE",
        fields: [
          { name: "pcode" },
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
      {
        name: "amt",
        using: "BTREE",
        fields: [
          { name: "amt" },
        ]
      },
      {
        name: "ali_asaled_sano_link_id_1b7c2f29",
        using: "BTREE",
        fields: [
          { name: "sano_link_id" },
        ]
      },
    ]
  });
};
