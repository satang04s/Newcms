const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ali_temp_ad', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    mcode: {
      type: DataTypes.STRING(7),
      allowNull: true
    },
    bdate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    lr1: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    rcode_l: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    level_l: {
      type: DataTypes.DECIMAL(15,0),
      allowNull: true
    },
    mcode_l: {
      type: DataTypes.STRING(7),
      allowNull: true
    },
    sano_l: {
      type: DataTypes.STRING(7),
      allowNull: true
    },
    rcode_r: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    level_r: {
      type: DataTypes.DECIMAL(15,0),
      allowNull: true
    },
    mcode_r: {
      type: DataTypes.STRING(7),
      allowNull: true
    },
    sano_r: {
      type: DataTypes.STRING(7),
      allowNull: true
    },
    total: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    flag: {
      type: DataTypes.STRING(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ali_temp_ad',
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
        name: "rcode_l",
        using: "BTREE",
        fields: [
          { name: "rcode_l" },
          { name: "rcode_r" },
          { name: "lr1" },
        ]
      },
      {
        name: "rcode_l_2",
        using: "BTREE",
        fields: [
          { name: "rcode_l" },
          { name: "lr1" },
        ]
      },
      {
        name: "rcode_r",
        using: "BTREE",
        fields: [
          { name: "rcode_r" },
          { name: "lr1" },
        ]
      },
      {
        name: "mcode",
        using: "BTREE",
        fields: [
          { name: "mcode" },
          { name: "rcode_l" },
        ]
      },
      {
        name: "mcode_2",
        using: "BTREE",
        fields: [
          { name: "mcode" },
          { name: "rcode_r" },
        ]
      },
      {
        name: "mcode_3",
        using: "BTREE",
        fields: [
          { name: "mcode" },
          { name: "rcode_l" },
          { name: "rcode_r" },
          { name: "lr1" },
        ]
      },
      {
        name: "mcode_4",
        using: "BTREE",
        fields: [
          { name: "mcode" },
          { name: "mcode_l" },
        ]
      },
      {
        name: "mcode_5",
        using: "BTREE",
        fields: [
          { name: "mcode" },
          { name: "mcode_r" },
        ]
      },
      {
        name: "mcode_6",
        using: "BTREE",
        fields: [
          { name: "mcode" },
          { name: "level_l" },
        ]
      },
      {
        name: "id",
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
