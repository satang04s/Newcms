const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ao_promotion_logs', {
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
    cal_point: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "calculate point for this bill"
    },
    pv_point: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "previous point"
    },
    ud_point: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "update point"
    },
    time_stamp: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ao_promotion_logs',
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
