const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('django_celery_beat_crontabschedule', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    minute: {
      type: DataTypes.STRING(240),
      allowNull: false
    },
    hour: {
      type: DataTypes.STRING(96),
      allowNull: false
    },
    day_of_week: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    day_of_month: {
      type: DataTypes.STRING(124),
      allowNull: false
    },
    month_of_year: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    timezone: {
      type: DataTypes.STRING(63),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'django_celery_beat_crontabschedule',
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
