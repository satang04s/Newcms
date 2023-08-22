const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ali_sms', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    mcode: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    mobile: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    mobile_desc: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    mobile_date: {
      type: DataTypes.STRING(14),
      allowNull: false
    },
    send_date: {
      type: DataTypes.STRING(14),
      allowNull: false
    },
    mobile_status: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    mobile_credits: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    credit_balance: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    recieve_date: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'ali_sms',
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
