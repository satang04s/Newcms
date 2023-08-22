const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ali_payment', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    payment_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    order_by: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    payment_ref: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    rep_column: {
      type: DataTypes.STRING(2555),
      allowNull: false
    },
    payment_column: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    shows: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    shows_ewallet: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    shows_mem_edit: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    shows_member: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'ali_payment',
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
