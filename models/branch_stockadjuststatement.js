const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('branch_stockadjuststatement', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    bill_number: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    sadate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    inv_code: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    usercode: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    remark: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    sa_type: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    cancel: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cancel_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    uid_cancel: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'branch_stockadjuststatement',
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
    ]
  });
};
