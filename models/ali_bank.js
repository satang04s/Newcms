const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ali_bank', {
    bankcode: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true
    },
    bankname: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    uid: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    code: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    locationbase: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'ali_bank',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "bankcode" },
        ]
      },
    ]
  });
};
