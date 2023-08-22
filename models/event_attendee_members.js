const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('event_attendee_members', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    attendee_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    member_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'event_attendee_members',
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
        name: "event_attendee_members_attendee_id_member_id_06e488bc_uniq",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "attendee_id" },
          { name: "member_id" },
        ]
      },
      {
        name: "event_attendee_members_attendee_id_455089c8",
        using: "BTREE",
        fields: [
          { name: "attendee_id" },
        ]
      },
      {
        name: "event_attendee_members_member_id_6a8184be",
        using: "BTREE",
        fields: [
          { name: "member_id" },
        ]
      },
    ]
  });
};
