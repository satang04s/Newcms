const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ali_bank_old', {
    bankcode: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED.ZEROFILL,
      allowNull: false,
      primaryKey: true
    },
    bankname: {
      type: DataTypes.CHAR(25),
      allowNull: true
    },
    code: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    uid: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    locationbase: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'ali_bank_old',
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
