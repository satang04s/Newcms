const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ali_global', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    numofchild: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    treeformat: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: ""
    },
    numoflevel: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    statusformat: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "close"
    },
    status_member: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    status_member_remark: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    status_regis_mb: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    status_regis_mb_remark: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    status_sale_mb: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    status_sale_mb_remark: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    status_swap_mb: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    status_swap_mb_remark: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    status_hold_mb: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    status_hold_mb_remark: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    status_remark: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    statusewallet: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    vip_exp: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    status_cron: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'ali_global',
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
