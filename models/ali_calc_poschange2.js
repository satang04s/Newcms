const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ali_calc_poschange2', {
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
      allowNull: false,
      defaultValue: ""
    },
    name_t: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    pos_before: {
      type: DataTypes.STRING(11),
      allowNull: true
    },
    pos_after: {
      type: DataTypes.STRING(11),
      allowNull: true
    },
    date_change: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    date_update: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    type: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    pvleft: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    pvright: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    dpvleft: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    dpvright: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    uid: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER,
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
    member_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ali_calc_poschange2',
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
        ]
      },
      {
        name: "ali_calc_poschange2_member_id_18a0a9f5",
        using: "BTREE",
        fields: [
          { name: "member_id" },
        ]
      },
    ]
  });
};
