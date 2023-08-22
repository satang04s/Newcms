const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('branch_branchgoodssnapremainingstatement', {
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
    }
  }, {
    sequelize,
    tableName: 'branch_branchgoodssnapremainingstatement',
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
        name: "branch_branchgoodssnapremainingstatement_branch_id_a827b3b8",
        using: "BTREE",
        fields: [
          { name: "branch_id" },
        ]
      },
      {
        name: "branch_branchgoodssnapremai_statement_state_id_4b690cbe",
        using: "BTREE",
        fields: [
          { name: "statement_state_id" },
        ]
      },
      {
        name: "branch_branchgoodssnapremai_statement_type_id_c616e449",
        using: "BTREE",
        fields: [
          { name: "statement_type_id" },
        ]
      },
    ]
  });
};
