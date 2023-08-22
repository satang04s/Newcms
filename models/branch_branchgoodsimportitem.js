const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('branch_branchgoodsimportitem', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    price: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    qty: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    product_id: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    statement_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'branch_branchgoodsimportitem',
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
        name: "branch_branchgoodsimportitem_product_id_b2cd49a3",
        using: "BTREE",
        fields: [
          { name: "product_id" },
        ]
      },
      {
        name: "branch_branchgoodsimportitem_statement_id_10bb5084",
        using: "BTREE",
        fields: [
          { name: "statement_id" },
        ]
      },
    ]
  });
};
