const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('django_celery_beat_periodictask', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(200),
      allowNull: false,
      unique: "name"
    },
    task: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    args: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    kwargs: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    queue: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    exchange: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    routing_key: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    expires: {
      type: DataTypes.DATE(6),
      allowNull: true
    },
    enabled: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    last_run_at: {
      type: DataTypes.DATE(6),
      allowNull: true
    },
    total_run_count: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    date_changed: {
      type: DataTypes.DATE(6),
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    crontab_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    interval_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    solar_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    one_off: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    start_time: {
      type: DataTypes.DATE(6),
      allowNull: true
    },
    priority: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    headers: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    clocked_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'django_celery_beat_periodictask',
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
        name: "name",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "name" },
        ]
      },
      {
        name: "django_celery_beat_periodictask_crontab_id_d3cba168",
        using: "BTREE",
        fields: [
          { name: "crontab_id" },
        ]
      },
      {
        name: "django_celery_beat_periodictask_interval_id_a8ca27da",
        using: "BTREE",
        fields: [
          { name: "interval_id" },
        ]
      },
      {
        name: "django_celery_beat_periodictask_solar_id_a87ce72c",
        using: "BTREE",
        fields: [
          { name: "solar_id" },
        ]
      },
      {
        name: "django_celery_beat_periodictask_clocked_id_47a69f82",
        using: "BTREE",
        fields: [
          { name: "clocked_id" },
        ]
      },
    ]
  });
};
