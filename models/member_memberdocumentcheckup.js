const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('member_memberdocumentcheckup', {
    date_issue: {
      type: DataTypes.DATE(6),
      allowNull: false,
      primaryKey: true
    },
    suspend: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    terminate: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'member_memberdocumentcheckup',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "date_issue" },
        ]
      },
    ]
  });
};
