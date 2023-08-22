const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ao_collect_sku_2023', {
    mcode: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    id_card: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    id_tax: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    member_name: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    pcode: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    pdesc: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    product_quatity: {
      type: DataTypes.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'ao_collect_sku_2023',
    timestamps: false
  });
};
