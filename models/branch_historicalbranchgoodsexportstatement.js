const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('branch_historicalbranchgoodsexportstatement', {
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
    to_branch_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'branch_historicalbranchgoodsexportstatement',
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
        name: "branch_historicalbranchgoodsexportstatement_id_d12276ce",
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "branch_historicalbranchgoodsexportstatement_branch_id_33e64204",
        using: "BTREE",
        fields: [
          { name: "branch_id" },
        ]
      },
      {
        name: "branch_historicalbranchgood_history_user_id_54f4515d",
        using: "BTREE",
        fields: [
          { name: "history_user_id" },
        ]
      },
      {
        name: "branch_historicalbranchgood_statement_state_id_3ac561db",
        using: "BTREE",
        fields: [
          { name: "statement_state_id" },
        ]
      },
      {
        name: "branch_historicalbranchgood_statement_type_id_e82ccacd",
        using: "BTREE",
        fields: [
          { name: "statement_type_id" },
        ]
      },
      {
        name: "branch_historicalbranchgood_to_branch_id_35516c56",
        using: "BTREE",
        fields: [
          { name: "to_branch_id" },
        ]
      },
    ]
  });
};
