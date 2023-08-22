const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('trip_travelpointstack', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    stamp_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    gold_point: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    silver_point: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    remaining_gold_point: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    remaining_silver_point: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    member_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'trip_travelpointstack',
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
        name: "trip_travelpointstack_member_id_bf1b0ff1",
        using: "BTREE",
        fields: [
          { name: "member_id" },
        ]
      },
    ]
  });
};
