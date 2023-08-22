const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('trip_travelpointusestatement', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    bill_number: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    issue_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    gold_coin: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    silver_coin: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    state: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    member_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    trip_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'trip_travelpointusestatement',
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
        name: "trip_travelpointusestatement_member_id_2996333a",
        using: "BTREE",
        fields: [
          { name: "member_id" },
        ]
      },
      {
        name: "trip_travelpointusestatement_trip_id_20d34b10",
        using: "BTREE",
        fields: [
          { name: "trip_id" },
        ]
      },
    ]
  });
};
