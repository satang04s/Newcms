const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('province', {
    provinceId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    provinceName: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    provinceNameEng: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    region: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'province',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "provinceId" },
        ]
      },
    ]
  });
};
