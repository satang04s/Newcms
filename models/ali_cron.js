const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ali_cron', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cron_detail: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    cron_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    rcode: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    httppost: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    requesturl: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    phpself: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'ali_cron',
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
