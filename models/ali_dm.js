const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ali_dm', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    rcode: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    mcode: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    upa_code: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    lr: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    pv: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true,
      defaultValue: 0.00
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
    npos: {
      type: DataTypes.CHAR(10),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'ali_dm',
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
          { name: "rcode" },
        ]
      },
      {
        name: "mcode",
        using: "BTREE",
        fields: [
          { name: "mcode" },
          { name: "rcode" },
        ]
      },
    ]
  });
};
