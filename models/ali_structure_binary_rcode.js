const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ali_structure_binary_rcode', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    rcode: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    mcode_ref: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    mcode_index: {
      type: DataTypes.STRING(5000),
      allowNull: false
    },
    sp_code: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    status_terminate: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    pos_cur: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    pos_cur1: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    pos_cur2: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'ali_structure_binary_rcode',
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
        name: "mcode_ref",
        using: "BTREE",
        fields: [
          { name: "mcode_ref" },
        ]
      },
      {
        name: "mcode_index",
        using: "BTREE",
        fields: [
          { name: "mcode_index", length: 1000 },
        ]
      },
      {
        name: "sp_code",
        using: "BTREE",
        fields: [
          { name: "sp_code" },
        ]
      },
      {
        name: "status_terminate",
        using: "BTREE",
        fields: [
          { name: "status_terminate" },
        ]
      },
      {
        name: "pos_cur",
        using: "BTREE",
        fields: [
          { name: "pos_cur" },
        ]
      },
      {
        name: "pos_cur1",
        using: "BTREE",
        fields: [
          { name: "pos_cur1" },
        ]
      },
      {
        name: "pos_cur2",
        using: "BTREE",
        fields: [
          { name: "pos_cur2" },
        ]
      },
    ]
  });
};
