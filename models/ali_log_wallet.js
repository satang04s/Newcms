const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ali_log_wallet', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
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
    mcode: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    ewallet: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    evoucher: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    eautoship: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    ecom: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'ali_log_wallet',
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
        name: "tdate",
        using: "BTREE",
        fields: [
          { name: "tdate" },
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
        name: "fdate",
        using: "BTREE",
        fields: [
          { name: "fdate" },
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
        name: "ewallet",
        using: "BTREE",
        fields: [
          { name: "ewallet" },
        ]
      },
    ]
  });
};
