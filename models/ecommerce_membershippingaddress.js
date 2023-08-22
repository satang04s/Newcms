const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ecommerce_membershippingaddress', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    client_name: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    mobile: {
      type: DataTypes.STRING(128),
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
    post_code: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    is_primary: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    member_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ecommerce_membershippingaddress',
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
        name: "ecommerce_membershippingaddress_member_id_6471766f",
        using: "BTREE",
        fields: [
          { name: "member_id" },
        ]
      },
    ]
  });
};
