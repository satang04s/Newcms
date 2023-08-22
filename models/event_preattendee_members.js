const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('event_preattendee_members', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    preattendee_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    member_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'event_preattendee_members',
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
        name: "event_preattendee_members_preattendee_id_member_id_e94b6c0b_uniq",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "preattendee_id" },
          { name: "member_id" },
        ]
      },
      {
        name: "event_preattendee_members_preattendee_id_2647e2da",
        using: "BTREE",
        fields: [
          { name: "preattendee_id" },
        ]
      },
      {
        name: "event_preattendee_members_member_id_8d87b604",
        using: "BTREE",
        fields: [
          { name: "member_id" },
        ]
      },
    ]
  });
};
