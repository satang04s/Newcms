const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('auth_permission', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    content_type_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    codename: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'auth_permission',
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
        name: "auth_permission_content_type_id_codename_01ab375a_uniq",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "content_type_id" },
          { name: "codename" },
        ]
      },
      {
        name: "auth_permission_content_type_id_2f476e4b",
        using: "BTREE",
        fields: [
          { name: "content_type_id" },
        ]
      },
    ]
  });
};
