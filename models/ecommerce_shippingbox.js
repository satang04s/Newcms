const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ecommerce_shippingbox', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    height: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    length: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    width: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    active: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    max_weight: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    inbound_cost: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    outbound_cost: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    space_margin: {
      type: DataTypes.DOUBLE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'ecommerce_shippingbox',
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
    ]
  });
};
