const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ali_cronjob', {
    cstatus: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ctype: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    cfdate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    ctdate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    ctime: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'ali_cronjob',
    timestamps: false
  });
};
