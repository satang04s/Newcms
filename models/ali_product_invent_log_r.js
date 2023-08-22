const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ali_product_invent_log_r', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    sadate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    pcode: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    qty: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    in_qty: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    out_qty: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    inv_code: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    check_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'ali_product_invent_log_r',
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
        name: "pcode",
        using: "BTREE",
        fields: [
          { name: "pcode" },
        ]
      },
      {
        name: "sadate",
        using: "BTREE",
        fields: [
          { name: "sadate" },
        ]
      },
    ]
  });
};
