const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ali_sale_hold', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    rcode: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    yokma: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    buy: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    used: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    balance: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    fdate: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    tdate: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'ali_sale_hold',
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
