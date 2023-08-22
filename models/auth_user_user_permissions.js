const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('auth_user_user_permissions', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    permission_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'auth_user_user_permissions',
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
        name: "auth_user_user_permissions_user_id_permission_id_14a6b632_uniq",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "user_id" },
          { name: "permission_id" },
        ]
      },
      {
        name: "auth_user_user_permissions_user_id_a95ead1b",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
      {
        name: "auth_user_user_permissions_permission_id_1fbb5f2c",
        using: "BTREE",
        fields: [
          { name: "permission_id" },
        ]
      },
    ]
  });
};
