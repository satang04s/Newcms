const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('event_event', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    location: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    mentor: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    tag: {
      type: DataTypes.STRING(8),
      allowNull: false
    },
    event_tag: {
      type: DataTypes.STRING(16),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'event_event',
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
