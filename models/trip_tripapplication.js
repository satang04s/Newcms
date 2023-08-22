const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('trip_tripapplication', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    register_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    balance_use: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    seat: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    member_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    trip_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    confirm_count: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    previous_use: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'trip_tripapplication',
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
        name: "trip_tripapplication_member_id_bb7faf77",
        using: "BTREE",
        fields: [
          { name: "member_id" },
        ]
      },
      {
        name: "trip_tripapplication_trip_id_4d4643a8",
        using: "BTREE",
        fields: [
          { name: "trip_id" },
        ]
      },
    ]
  });
};
