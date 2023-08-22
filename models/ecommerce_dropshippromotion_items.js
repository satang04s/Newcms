const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ecommerce_dropshippromotion_items', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    dropshippromotion_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'ecommerce_dropshippromotion',
        key: 'id'
      }
    },
    productclass_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'ecommerce_productclass',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'ecommerce_dropshippromotion_items',
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
      {
        name: "ecommerce_dropshippromot_dropshippromotion_id_pro_8dd6297a_uniq",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "dropshippromotion_id" },
          { name: "productclass_id" },
        ]
      },
      {
        name: "ecommerce_dropshippr_productclass_id_2fc80ca7_fk_ecommerce",
        using: "BTREE",
        fields: [
          { name: "productclass_id" },
        ]
      },
    ]
  });
};
