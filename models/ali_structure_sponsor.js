const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ali_structure_sponsor', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    mcode_index: {
      type: DataTypes.STRING(1000),
      allowNull: false
    },
    mcode_ref: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    tot_pv: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    level: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'ali_structure_sponsor',
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
          { name: "mcode_index", length: 767 },
        ]
      },
      {
        name: "tot_pv",
        using: "BTREE",
        fields: [
          { name: "tot_pv" },
        ]
      },
      {
        name: "level",
        using: "BTREE",
        fields: [
          { name: "level" },
        ]
      },
    ]
  });
};
