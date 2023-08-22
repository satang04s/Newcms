const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ecommerce_t2ppresult', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    app_code: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    invoice_no: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    amount: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    tx_id: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    return_code: {
      type: DataTypes.STRING(8),
      allowNull: false
    },
    channel: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    time_stamp: {
      type: DataTypes.DATE(6),
      allowNull: false
    },
    order_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ecommerce_t2ppresult',
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
        name: "ecommerce_t2ppresult_order_id_e2dcce79",
        using: "BTREE",
        fields: [
          { name: "order_id" },
        ]
      },
    ]
  });
};
