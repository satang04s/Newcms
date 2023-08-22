const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ali_product_package1', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    package: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    pcode: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    pdesc: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    qty: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    mdate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    promotion_id: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    product_id: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ali_product_package1',
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
        name: "ali_product_package1_promotion_id_b89244cf",
        using: "BTREE",
        fields: [
          { name: "promotion_id" },
        ]
      },
      {
        name: "ali_product_package1_product_id_44fbbc8e",
        using: "BTREE",
        fields: [
          { name: "product_id" },
        ]
      },
    ]
  });
};
