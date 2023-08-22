const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ao_promotionpv_logs', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    bill_number: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    pv_remain: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "calculate point for this bill"
    },
    count_use: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "previous point"
    },
    remain: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "update point"
    },
    mcode: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    new_mcode: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    date_added: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ao_promotionpv_logs',
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
