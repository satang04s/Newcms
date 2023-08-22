const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ali_bm1', {
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
    sano: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: "0"
    },
    mcode: {
      type: DataTypes.CHAR(255),
      allowNull: false
    },
    upa_code: {
      type: DataTypes.CHAR(255),
      allowNull: true
    },
    lr: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    level: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    pv: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true,
      defaultValue: 0.00
    },
    bv: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    gpv: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true,
      defaultValue: 0.00
    },
    mpos: {
      type: DataTypes.CHAR(10),
      allowNull: false
    },
    sa_type: {
      type: DataTypes.CHAR(10),
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
    tableName: 'ali_bm1',
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
        name: "rcode",
        using: "BTREE",
        fields: [
          { name: "sano" },
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
        name: "upa_code",
        using: "BTREE",
        fields: [
          { name: "upa_code" },
        ]
      },
      {
        name: "lr",
        using: "BTREE",
        fields: [
          { name: "lr" },
        ]
      },
      {
        name: "pv",
        using: "BTREE",
        fields: [
          { name: "pv" },
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
        name: "ali_bm1_member_id_fa26e87c",
        using: "BTREE",
        fields: [
          { name: "member_id" },
        ]
      },
    ]
  });
};
