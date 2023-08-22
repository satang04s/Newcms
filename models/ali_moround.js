const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ali_moround', {
    rid: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    rcode: {
      type: DataTypes.STRING(5),
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
    remark: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ali_moround',
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
        name: "rcode_2",
        using: "BTREE",
        fields: [
          { name: "rcode" },
          { name: "calc" },
        ]
      },
    ]
  });
};
