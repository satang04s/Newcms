const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ali_bround', {
    rid: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    rcode: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    rdate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    fsano: {
      type: DataTypes.STRING(7),
      allowNull: true
    },
    tsano: {
      type: DataTypes.STRING(7),
      allowNull: true
    },
    paydate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    calc: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    calc_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    remark: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    fdate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    tdate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    fpdate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    tpdate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    timequery: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    uid: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'ali_bround',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "rid" },
        ]
      },
      {
        name: "rcode",
        using: "BTREE",
        fields: [
          { name: "rcode" },
        ]
      },
      {
        name: "paydate",
        using: "BTREE",
        fields: [
          { name: "paydate" },
        ]
      },
    ]
  });
};
