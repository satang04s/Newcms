const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ali_tmbonus', {
    id: {
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
    name_f: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    name_t: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    pos_cur: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    mb2su: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    mb2ex: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    tot_pv: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    left_pv: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    right_pv: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    balance_pv: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    tpoint: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    spoint: {
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
    locationbase: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'ali_tmbonus',
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
        name: "fdate",
        using: "BTREE",
        fields: [
          { name: "fdate" },
          { name: "tdate" },
        ]
      },
      {
        name: "mcode",
        using: "BTREE",
        fields: [
          { name: "mcode" },
          { name: "fdate" },
          { name: "tdate" },
        ]
      },
    ]
  });
};
