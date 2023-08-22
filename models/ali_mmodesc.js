const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ali_mmodesc', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    mcode: {
      type: DataTypes.CHAR(7),
      allowNull: true
    },
    rcode: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cmcode: {
      type: DataTypes.CHAR(7),
      allowNull: true
    },
    level: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    total: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    flag: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    csano: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'ali_mmodesc',
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
    ]
  });
};
