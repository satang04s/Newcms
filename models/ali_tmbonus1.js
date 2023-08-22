const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ali_tmbonus1', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
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
    rcode: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    smallbig: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    point: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    seats: {
      type: DataTypes.INTEGER,
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
    },
    firstseatpoint: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    secondseatpoint: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    function_count: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    groupvp: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    couple: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    pos_cur: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'ali_tmbonus1',
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
        name: "mcode",
        using: "BTREE",
        fields: [
          { name: "mcode" },
          { name: "rcode" },
          { name: "fdate" },
          { name: "tdate" },
        ]
      },
    ]
  });
};
