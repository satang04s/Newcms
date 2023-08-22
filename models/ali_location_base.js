const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ali_location_base', {
    cid: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cshort: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    cname: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    csending: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    ctax: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    ctax1: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    com_stockist: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    crate: {
      type: DataTypes.DECIMAL(15,6),
      allowNull: false
    },
    pcode_register: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    pcode_extend: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    pcode_charge: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    smssending: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    currcode: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    lang: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    timediff: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    regis_transfer: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    regis_success: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    regis_fail: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    regis_cancel: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    main_inv_code: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    com_transfer_chagre: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'ali_location_base',
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
    ]
  });
};
