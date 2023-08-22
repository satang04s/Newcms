const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ali_news', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED.ZEROFILL,
      allowNull: false,
      primaryKey: true
    },
    head: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    dates: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    status: {
      type: DataTypes.ENUM('Y','N'),
      allowNull: false
    },
    popup: {
      type: DataTypes.ENUM('Y','N'),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'ali_news',
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
    ]
  });
};
