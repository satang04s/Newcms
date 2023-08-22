const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('account_useraccount', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    crypto: {
      type: DataTypes.BLOB,
      allowNull: true
    },
    current_lang: {
      type: DataTypes.STRING(4),
      allowNull: false
    },
    current_currency: {
      type: DataTypes.STRING(4),
      allowNull: false
    },
    mirror_mode: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    member_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      unique: "member_id"
    },
    staff_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: "user_id"
    }
  }, {
    sequelize,
    tableName: 'account_useraccount',
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
        name: "user_id",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
      {
        name: "member_id",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "member_id" },
        ]
      },
      {
        name: "account_useraccount_staff_id_d7555fed",
        using: "BTREE",
        fields: [
          { name: "staff_id" },
        ]
      },
    ]
  });
};
