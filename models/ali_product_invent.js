const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ali_product_invent', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    pcode: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    qty: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    qtys: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    qtyr: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    qtyd: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ud: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    inv_code: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    branch_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    product_id: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ali_product_invent',
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
        name: "ali_product_invent_branch_id_6530db81",
        using: "BTREE",
        fields: [
          { name: "branch_id" },
        ]
      },
      {
        name: "ali_product_invent_product_id_a87a456b",
        using: "BTREE",
        fields: [
          { name: "product_id" },
        ]
      },
    ]
  });
};
