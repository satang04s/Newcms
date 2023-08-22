const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ali_binary_report', {
    mcode: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    mdate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    name_t: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    total: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    fast: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    weakstrong: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    matching: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    upa_code: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    upa_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    sp_code: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    sp_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    lv: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    lv_sp: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    lr: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    pos_cur: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    pos_cur2: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    uid: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    totpv: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    hpv: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    thismonth: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    nextmonth: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'ali_binary_report',
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
        name: "uid",
        using: "BTREE",
        fields: [
          { name: "uid" },
        ]
      },
    ]
  });
};
