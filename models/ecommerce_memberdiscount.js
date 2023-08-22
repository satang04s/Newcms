const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ecommerce_memberdiscount', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    date_issue: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    expired_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    value: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    remaining: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    member_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ecommerce_memberdiscount',
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
        name: "ecommerce_memberdiscount_member_id_d0165d01",
        using: "BTREE",
        fields: [
          { name: "member_id" },
        ]
      },
    ]
  });
};
