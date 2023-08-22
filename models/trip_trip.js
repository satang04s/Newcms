const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('trip_trip', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    code: {
      type: DataTypes.STRING(8),
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    start: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    end: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    register_period: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    balance: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    month_qualified: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    condition: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    max_seat: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    balance_discount: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    trip_type: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    minimum_matching: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    required_gold: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    required_silver: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'trip_trip',
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
