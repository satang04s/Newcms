const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ali_position2', {
    posid: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    posshort: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    posname: {
      type: DataTypes.STRING(255),
      allowNull: true,
      unique: "posname"
    },
    posimg: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    posutab: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    posdtab: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    posdesc: {
      type: DataTypes.CHAR(50),
      allowNull: true
    },
    ud: {
      type: DataTypes.CHAR(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ali_position2',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "posid" },
        ]
      },
      {
        name: "posname",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "posname" },
        ]
      },
    ]
  });
};
