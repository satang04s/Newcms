const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('member_membersocialtagconfig', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    pixel_id: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    line_tag_id: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    google_tag_id: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    google_analytics_id: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    member_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      unique: "member_id"
    }
  }, {
    sequelize,
    tableName: 'member_membersocialtagconfig',
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
        name: "member_id",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "member_id" },
        ]
      },
    ]
  });
};
