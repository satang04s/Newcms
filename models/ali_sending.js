const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ali_sending', {
    sid: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    locationbase: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    minpv: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    maxpv: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    minweight: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    maxweight: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    'inbound-pcode': {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    'outbound-pcode': {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    'overweight-pcode': {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'ali_sending',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "sid" },
        ]
      },
    ]
  });
};
