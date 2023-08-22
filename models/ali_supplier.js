const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ali_supplier', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    sup_code: {
      type: DataTypes.STRING(7),
      allowNull: true
    },
    sup_desc: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    sup_type: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    address: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    districtId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    amphurId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    provinceId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    zip: {
      type: DataTypes.STRING(5),
      allowNull: false
    },
    uid: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'ali_supplier',
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
