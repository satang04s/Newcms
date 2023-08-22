const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ali_bbuy', {
    bbuy_ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    bbuy_Date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    pcode: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    bbuy_Qua: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    bbuy_Balance: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    txtoption: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'ali_bbuy',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "bbuy_ID" },
        ]
      },
    ]
  });
};
