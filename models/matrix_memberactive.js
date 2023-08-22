const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('matrix_memberactive', {
    member: {
      type: DataTypes.STRING(64),
      allowNull: false,
      primaryKey: true
    },
    last_seen: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'matrix_memberactive',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "member" },
        ]
      },
    ]
  });
};
