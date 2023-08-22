const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ali_import_stock_d', {
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
      type: DataTypes.STRING(40),
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
    qty_old: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    amt: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ali_import_stock_d',
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
