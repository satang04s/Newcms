const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('oauth2_provider_refreshtoken', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    token: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    access_token_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      unique: "access_token_id"
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
    },
    revoked: {
      type: DataTypes.DATE(6),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'oauth2_provider_refreshtoken',
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
        name: "access_token_id",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "access_token_id" },
        ]
      },
      {
        name: "oauth2_provider_refreshtoken_token_revoked_af8a5134_uniq",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "token" },
          { name: "revoked" },
        ]
      },
      {
        name: "oauth2_provider_refreshtoken_application_id_2d1c311b",
        using: "BTREE",
        fields: [
          { name: "application_id" },
        ]
      },
      {
        name: "oauth2_provider_refreshtoken_user_id_da837fce",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
    ]
  });
};
