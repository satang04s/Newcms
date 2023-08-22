const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ali_embonus', {
    aid: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    rcode: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    mcode: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    mpos: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    name_t: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    total: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    total2: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    tax: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    oon: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    bonus: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    fdate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    tdate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    pos_cur: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    adjust: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    crate: {
      type: DataTypes.DECIMAL(11,6),
      allowNull: false
    },
    locationbase: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    pos_cur1: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    weak: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    pv_world: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    allsumpv_cd: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    allsumpv_sd: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    sumpv_cd: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    sumpv_sd: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    exp: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'ali_embonus',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "aid" },
        ]
      },
      {
        name: "rcode",
        using: "BTREE",
        fields: [
          { name: "rcode" },
          { name: "mcode" },
        ]
      },
      {
        name: "fdate",
        using: "BTREE",
        fields: [
          { name: "fdate" },
          { name: "tdate" },
        ]
      },
    ]
  });
};
