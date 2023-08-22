const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ali_gmbonus', {
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
    name_t: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    fast_bonus: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    cycle_bonus: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    matching_bonus: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    key_bonus: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    autoship: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    rcode: {
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
    beatoship: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    bvoucher: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'ali_gmbonus',
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
        ]
      },
    ]
  });
};
