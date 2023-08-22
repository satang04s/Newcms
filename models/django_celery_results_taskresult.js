const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('django_celery_results_taskresult', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    task_id: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: "task_id"
    },
    status: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    content_type: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    content_encoding: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    result: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    date_done: {
      type: DataTypes.DATE(6),
      allowNull: false
    },
    traceback: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    hidden: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    meta: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    task_args: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    task_kwargs: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    task_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'django_celery_results_taskresult',
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
        name: "task_id",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "task_id" },
        ]
      },
      {
        name: "django_celery_results_taskresult_hidden_cd77412f",
        using: "BTREE",
        fields: [
          { name: "hidden" },
        ]
      },
      {
        name: "django_celery_results_taskresult_date_done_49edada6",
        using: "BTREE",
        fields: [
          { name: "date_done" },
        ]
      },
      {
        name: "django_celery_results_taskresult_status_cbbed23a",
        using: "BTREE",
        fields: [
          { name: "status" },
        ]
      },
      {
        name: "django_celery_results_taskresult_task_name_90987df3",
        using: "BTREE",
        fields: [
          { name: "task_name" },
        ]
      },
    ]
  });
};
