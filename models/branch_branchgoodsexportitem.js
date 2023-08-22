const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('branch_branchgoodsexportitem', {
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
    tableName: 'branch_branchgoodsexportitem',
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
        name: "branch_branchgoodsexportitem_product_id_000f1fba",
        using: "BTREE",
        fields: [
          { name: "product_id" },
        ]
      },
      {
        name: "branch_branchgoodsexportitem_statement_id_981d7541",
        using: "BTREE",
        fields: [
          { name: "statement_id" },
        ]
      },
    ]
  });
};
