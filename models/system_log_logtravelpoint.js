const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('system_log_logtravelpoint', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    date_issue: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    statement: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    silver_in: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    silver_out: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    gold_in: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    gold_out: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    total: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    remark: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    member_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'system_log_logtravelpoint',
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
        name: "system_log_logtravelpoint_member_id_a57b51a0",
        using: "BTREE",
        fields: [
          { name: "member_id" },
        ]
      },
    ]
  });
};
