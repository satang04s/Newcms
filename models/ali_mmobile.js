const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ali_mmobile', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    mcode: {
      type: DataTypes.CHAR(7),
      allowNull: true
    },
    rcode: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    dl: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    total: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    tax: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    coupon: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    paydate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    flag: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    sync: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    web: {
      type: DataTypes.CHAR(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ali_mmobile',
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
