const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ali_expdate', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    mid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    exp_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    date_change: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    exp_type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    sano: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ali_expdate',
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
        name: "mid",
        using: "BTREE",
        fields: [
          { name: "mid" },
        ]
      },
      {
        name: "mid_2",
        using: "BTREE",
        fields: [
          { name: "mid" },
          { name: "exp_date" },
        ]
      },
      {
        name: "exp_date",
        using: "BTREE",
        fields: [
          { name: "exp_date" },
        ]
      },
      {
        name: "sano",
        using: "BTREE",
        fields: [
          { name: "sano" },
        ]
      },
    ]
  });
};
