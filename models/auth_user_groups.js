const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('auth_user_groups', {
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
    group_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'auth_user_groups',
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
        name: "auth_user_groups_user_id_group_id_94350c0c_uniq",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "user_id" },
          { name: "group_id" },
        ]
      },
      {
        name: "auth_user_groups_user_id_6a12ed8b",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
      {
        name: "auth_user_groups_group_id_97559544",
        using: "BTREE",
        fields: [
          { name: "group_id" },
        ]
      },
    ]
  });
};
