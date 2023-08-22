const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ali_ostockd', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    sano: {
      type: DataTypes.INTEGER,
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
    inv_coden: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    inv_ref: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    inv_refn: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    rccode: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    stockist: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    pcode: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    pdesc: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    unit: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    mcode: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    cost: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    price: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    pv: {
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
    ctax: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    group_id: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'ali_ostockd',
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
