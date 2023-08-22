const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('district', {
    districtId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    districtName: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    districtNameEng: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    amphurId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    provinceId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    zipcode: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'district',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "districtId" },
        ]
      },
      {
        name: "amphurId",
        using: "BTREE",
        fields: [
          { name: "amphurId" },
        ]
      },
      {
        name: "provinceId",
        using: "BTREE",
        fields: [
          { name: "provinceId" },
        ]
      },
      {
        name: "provinceId_2",
        using: "BTREE",
        fields: [
          { name: "provinceId" },
        ]
      },
    ]
  });
};
