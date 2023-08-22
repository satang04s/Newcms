const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('django_admin_log', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    action_time: {
      type: DataTypes.DATE(6),
      allowNull: false
    },
    object_id: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    object_repr: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    action_flag: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false
    },
    change_message: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    content_type_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'django_admin_log',
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
        name: "django_admin_log_content_type_id_c4bce8eb",
        using: "BTREE",
        fields: [
          { name: "content_type_id" },
        ]
      },
      {
        name: "django_admin_log_user_id_c564eba6",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
    ]
  });
};
