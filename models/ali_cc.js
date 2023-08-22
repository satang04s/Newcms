const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ali_cc', {
    bid: {
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
      type: DataTypes.STRING(7),
      allowNull: false
    },
    upa_code: {
      type: DataTypes.STRING(7),
      allowNull: true
    },
    rol_l: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    rol_r: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'ali_cc',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "bid" },
        ]
      },
    ]
  });
};
