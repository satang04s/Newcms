const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('branch_historicalbranchgoodssnapremainingstatement', {
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
    }
  }, {
    sequelize,
    tableName: 'branch_historicalbranchgoodssnapremainingstatement',
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
        name: "branch_historicalbranchgoodssnapremainingstatement_id_be2f4e12",
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "branch_historicalbranchgood_branch_id_2781ab4e",
        using: "BTREE",
        fields: [
          { name: "branch_id" },
        ]
      },
      {
        name: "branch_historicalbranchgood_history_user_id_2b9303c2",
        using: "BTREE",
        fields: [
          { name: "history_user_id" },
        ]
      },
      {
        name: "branch_historicalbranchgood_statement_state_id_01b5a761",
        using: "BTREE",
        fields: [
          { name: "statement_state_id" },
        ]
      },
      {
        name: "branch_historicalbranchgood_statement_type_id_6d1c215f",
        using: "BTREE",
        fields: [
          { name: "statement_type_id" },
        ]
      },
    ]
  });
};
