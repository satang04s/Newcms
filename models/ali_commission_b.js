const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ali_commission_b', {
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
    pos_cur3: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    dmbonus: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    embonus: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    total: {
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
    member_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ali_commission_b',
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
        name: "mcode_2",
        using: "BTREE",
        fields: [
          { name: "mcode" },
          { name: "fdate" },
          { name: "tdate" },
        ]
      },
      {
        name: "fdate",
        using: "BTREE",
        fields: [
          { name: "fdate" },
        ]
      },
      {
        name: "tdate",
        using: "BTREE",
        fields: [
          { name: "tdate" },
        ]
      },
      {
        name: "total",
        using: "BTREE",
        fields: [
          { name: "total" },
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
        name: "ali_commission_b_member_id_3e7c4c97",
        using: "BTREE",
        fields: [
          { name: "member_id" },
        ]
      },
    ]
  });
};
