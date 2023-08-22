const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('oauth2_provider_accesstoken', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    token: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: "oauth2_provider_accesstoken_token_8af090f8_uniq"
    },
    expires: {
      type: DataTypes.DATE(6),
      allowNull: false
    },
    scope: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    application_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    created: {
      type: DataTypes.DATE(6),
      allowNull: false
    },
    updated: {
      type: DataTypes.DATE(6),
      allowNull: false
    },
    source_refresh_token_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      unique: "source_refresh_token_id"
    }
  }, {
    sequelize,
    tableName: 'oauth2_provider_accesstoken',
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
        name: "oauth2_provider_accesstoken_token_8af090f8_uniq",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "token" },
        ]
      },
      {
        name: "source_refresh_token_id",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "source_refresh_token_id" },
        ]
      },
      {
        name: "oauth2_provider_accesstoken_application_id_b22886e1",
        using: "BTREE",
        fields: [
          { name: "application_id" },
        ]
      },
      {
        name: "oauth2_provider_accesstoken_user_id_6e4c9a65",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
    ]
  });
};
