const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ali_lr_def', {
    lr_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    lr_name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'ali_lr_def',
    timestamps: false
  });
};
