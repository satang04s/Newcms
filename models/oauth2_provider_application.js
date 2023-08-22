const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('oauth2_provider_application', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    client_id: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: "client_id"
    },
    redirect_uris: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    client_type: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    authorization_grant_type: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    client_secret: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    skip_authorization: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    created: {
      type: DataTypes.DATE(6),
      allowNull: false
    },
    updated: {
      type: DataTypes.DATE(6),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'oauth2_provider_application',
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
        name: "client_id",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "client_id" },
        ]
      },
      {
        name: "oauth2_provider_application_client_secret_53133678",
        using: "BTREE",
        fields: [
          { name: "client_secret" },
        ]
      },
      {
        name: "oauth2_provider_application_user_id_79829054",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
    ]
  });
};
