const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('branch_historicalbranchgoodsimportstatement', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false
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
    history_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    history_date: {
      type: DataTypes.DATE(6),
      allowNull: false
    },
    history_change_reason: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    history_type: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    branch_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    from_branch_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    history_user_id: {
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
    import_statement_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'branch_historicalbranchgoodsimportstatement',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "history_id" },
        ]
      },
      {
        name: "branch_historicalbranchgoodsimportstatement_id_670efe02",
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "branch_historicalbranchgoodsimportstatement_branch_id_92643fc1",
        using: "BTREE",
        fields: [
          { name: "branch_id" },
        ]
      },
      {
        name: "branch_historicalbranchgood_from_branch_id_dd22dd8e",
        using: "BTREE",
        fields: [
          { name: "from_branch_id" },
        ]
      },
      {
        name: "branch_historicalbranchgood_history_user_id_d2f98dc2",
        using: "BTREE",
        fields: [
          { name: "history_user_id" },
        ]
      },
      {
        name: "branch_historicalbranchgood_statement_state_id_8df2c112",
        using: "BTREE",
        fields: [
          { name: "statement_state_id" },
        ]
      },
      {
        name: "branch_historicalbranchgood_statement_type_id_4d570f95",
        using: "BTREE",
        fields: [
          { name: "statement_type_id" },
        ]
      },
      {
        name: "branch_historicalbranchgood_import_statement_id_938d520e",
        using: "BTREE",
        fields: [
          { name: "import_statement_id" },
        ]
      },
    ]
  });
};
