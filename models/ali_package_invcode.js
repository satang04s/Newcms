const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ali_package_invcode', {
    pcode: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    inv_code: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'ali_package_invcode',
    timestamps: false
  });
};
