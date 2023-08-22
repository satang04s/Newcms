const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ali_tsaled', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    sano: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    sadate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    inv_code: {
      type: DataTypes.STRING(7),
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
    mcode: {
      type: DataTypes.STRING(7),
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
    fv: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
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
    outstanding: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    uidm: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'ali_tsaled',
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
    ]
  });
};
