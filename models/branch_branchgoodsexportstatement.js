const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('branch_branchgoodsexportstatement', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    bill_number: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    create_date: {
      type: DataTypes.DATE(6),
      allowNull: false
    },
    date_issue: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    remark: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    discount: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    create_user: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    seller_name: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    total: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    branch_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    statement_state_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    statement_type_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    to_branch_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'branch_branchgoodsexportstatement',
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
        name: "branch_branchgoodsexportstatement_branch_id_b52a25ae",
        using: "BTREE",
        fields: [
          { name: "branch_id" },
        ]
      },
      {
        name: "branch_branchgoodsexportstatement_statement_state_id_2ac6bbe0",
        using: "BTREE",
        fields: [
          { name: "statement_state_id" },
        ]
      },
      {
        name: "branch_branchgoodsexportstatement_statement_type_id_0f8ef149",
        using: "BTREE",
        fields: [
          { name: "statement_type_id" },
        ]
      },
      {
        name: "branch_branchgoodsexportstatement_to_branch_id_61b42e2b",
        using: "BTREE",
        fields: [
          { name: "to_branch_id" },
        ]
      },
    ]
  });
};
