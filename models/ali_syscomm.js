const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ali_syscomm', {
    cid: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    faststart: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    binary: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    weekstrong: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    trinary: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    unilevel: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    matching: {
      type: DataTypes.STRING(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ali_syscomm',
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
