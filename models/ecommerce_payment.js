const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ecommerce_payment', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    code: {
      type: DataTypes.STRING(4),
      allowNull: false
    },
    payment_type: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    amount: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    remark: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    invoice_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ecommerce_payment',
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
        name: "ecommerce_payment_invoice_id_216cb8a6",
        using: "BTREE",
        fields: [
          { name: "invoice_id" },
        ]
      },
    ]
  });
};
