const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ali_inventory_order', {
    MLM_Inv_Type: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    MLM_Type_Group: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    Oracle_Type: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    Mapping_Code: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true
    },
    Mapping_type: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'ali_inventory_order',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Mapping_Code" },
          { name: "Mapping_type" },
        ]
      },
    ]
  });
};
