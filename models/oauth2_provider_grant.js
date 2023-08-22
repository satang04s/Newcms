const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('oauth2_provider_grant', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    code: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: "oauth2_provider_grant_code_49ab4ddf_uniq"
    },
    expires: {
      type: DataTypes.DATE(6),
      allowNull: false
    },
    redirect_uri: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    scope: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    application_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER,
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
    tableName: 'oauth2_provider_grant',
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
        name: "oauth2_provider_grant_code_49ab4ddf_uniq",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "code" },
        ]
      },
      {
        name: "oauth2_provider_grant_application_id_81923564",
        using: "BTREE",
        fields: [
          { name: "application_id" },
        ]
      },
      {
        name: "oauth2_provider_grant_user_id_e8f62af8",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
    ]
  });
};
