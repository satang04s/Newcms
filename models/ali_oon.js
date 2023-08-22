const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ali_oon', {
    oon: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    sms_credits: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'ali_oon',
    timestamps: false
  });
};
