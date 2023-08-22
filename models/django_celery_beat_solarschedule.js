const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('django_celery_beat_solarschedule', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    event: {
      type: DataTypes.STRING(24),
      allowNull: false
    },
    latitude: {
      type: DataTypes.DECIMAL(9,6),
      allowNull: false
    },
    longitude: {
      type: DataTypes.DECIMAL(9,6),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'django_celery_beat_solarschedule',
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
        name: "django_celery_beat_solar_event_latitude_longitude_ba64999a_uniq",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "event" },
          { name: "latitude" },
          { name: "longitude" },
        ]
      },
    ]
  });
};
