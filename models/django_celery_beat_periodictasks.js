const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('django_celery_beat_periodictasks', {
    ident: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      primaryKey: true
    },
    last_update: {
      type: DataTypes.DATE(6),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'django_celery_beat_periodictasks',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ident" },
        ]
      },
    ]
  });
};
