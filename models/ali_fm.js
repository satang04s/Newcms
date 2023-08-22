const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ali_fm', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    rcode: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    inv_code: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    inv_ref: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    sano: {
      type: DataTypes.CHAR(255),
      allowNull: true
    },
    status: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    sa_type: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    tot_pv: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true,
      defaultValue: 0.00
    },
    tot_price: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true,
      defaultValue: 0.00
    },
    mdate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    crate: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    locationbase: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'ali_fm',
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
        name: "rcode",
        using: "BTREE",
        fields: [
          { name: "rcode" },
        ]
      },
      {
        name: "mcode",
        using: "BTREE",
        fields: [
          { name: "inv_code" },
          { name: "rcode" },
        ]
      },
    ]
  });
};
