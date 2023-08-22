const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('django_celery_beat_intervalschedule', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    every: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    period: {
      type: DataTypes.STRING(24),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'django_celery_beat_intervalschedule',
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
