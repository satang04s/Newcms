const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ali_sponsor', {
    mcode: {
      type: DataTypes.STRING(7),
      allowNull: false
    },
    sponsor: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'ali_sponsor',
    timestamps: false
  });
};
