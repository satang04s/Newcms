const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('amphur', {
    amphurId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    amphurName: {
      type: DataTypes.STRING(30),
      allowNull: false,
      defaultValue: ""
    },
    amphurNameEng: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    provinceId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'amphur',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
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
    ]
  });
};
