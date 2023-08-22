const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('member_memberm', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    member_code: {
      type: DataTypes.STRING(16),
      allowNull: false,
      unique: "member_code"
    },
    register_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    name_title: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    sex: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    id_card: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    birthday: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    mobile: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    telephone: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    address: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    sub_district: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    district: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    province: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    country: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    post_code: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    sponsor_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    disable: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'member_memberm',
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
        name: "member_code",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "member_code" },
        ]
      },
      {
        name: "member_memberm_name_d473af00",
        using: "BTREE",
        fields: [
          { name: "name" },
        ]
      },
      {
        name: "member_memberm_sponsor_id_962e9190",
        using: "BTREE",
        fields: [
          { name: "sponsor_id" },
        ]
      },
    ]
  });
};
