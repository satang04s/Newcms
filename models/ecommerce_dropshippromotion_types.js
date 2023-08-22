const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ecommerce_dropshippromotion_types', {
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
    dropshippromotiontype_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'ecommerce_dropshippromotiontype',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'ecommerce_dropshippromotion_types',
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
        name: "ecommerce_dropshippromot_dropshippromotion_id_dro_f1dcae40_uniq",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "dropshippromotion_id" },
          { name: "dropshippromotiontype_id" },
        ]
      },
      {
        name: "ecommerce_dropshippr_dropshippromotiontyp_3ba43cba_fk_ecommerce",
        using: "BTREE",
        fields: [
          { name: "dropshippromotiontype_id" },
        ]
      },
    ]
  });
};
