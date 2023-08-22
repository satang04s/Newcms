const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ali_cround', {
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
    cstatus: {
      type: DataTypes.INTEGER,
      allowNull: false
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
    total_a: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    total_h: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    fast: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    invent: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    binaryt: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    matching: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    pool: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    adjust_binary: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    adjust_matching: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    adjust_pool: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    calc_date: {
      type: DataTypes.DATE,
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
    tableName: 'ali_cround',
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
