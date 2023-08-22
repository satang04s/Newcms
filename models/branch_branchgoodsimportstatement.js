const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('branch_branchgoodsimportstatement', {
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
    from_branch_id: {
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
      allowNull: true,
      unique: "import_statement_id"
    }
  }, {
    sequelize,
    tableName: 'branch_branchgoodsimportstatement',
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
        name: "import_statement_id",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "import_statement_id" },
        ]
      },
      {
        name: "branch_branchgoodsimportstatement_branch_id_f12a467a",
        using: "BTREE",
        fields: [
          { name: "branch_id" },
        ]
      },
      {
        name: "branch_branchgoodsimportstatement_from_branch_id_f56a590b",
        using: "BTREE",
        fields: [
          { name: "from_branch_id" },
        ]
      },
      {
        name: "branch_branchgoodsimportstatement_statement_state_id_4d9df580",
        using: "BTREE",
        fields: [
          { name: "statement_state_id" },
        ]
      },
      {
        name: "branch_branchgoodsimportstatement_statement_type_id_142d185e",
        using: "BTREE",
        fields: [
          { name: "statement_type_id" },
        ]
      },
    ]
  });
};
