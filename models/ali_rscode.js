const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ali_rscode', {
    rccode: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    rccode_desc: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    mapping_code: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    inv_code: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'ali_rscode',
    timestamps: false
  });
};
