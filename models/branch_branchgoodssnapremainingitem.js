const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('branch_branchgoodssnapremainingitem', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
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
    tableName: 'branch_branchgoodssnapremainingitem',
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
        name: "branch_branchgoodssnapremainingitem_product_id_3d233b14",
        using: "BTREE",
        fields: [
          { name: "product_id" },
        ]
      },
      {
        name: "branch_branchgoodssnapremainingitem_statement_id_2b727a2d",
        using: "BTREE",
        fields: [
          { name: "statement_id" },
        ]
      },
    ]
  });
};
