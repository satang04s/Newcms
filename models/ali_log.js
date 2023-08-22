const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ali_log', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    sys_id: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    subject: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    object: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    detail: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    chk_mobile: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    chk_id_card: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    chk_sp_code: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    chk_upa_code: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    chk_acc_no: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ip: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    logdate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    logtime: {
      type: DataTypes.TIME,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ali_log',
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
