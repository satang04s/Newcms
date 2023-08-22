const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ali_poschange', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    mcode: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    pos_before: {
      type: DataTypes.STRING(11),
      allowNull: true
    },
    pos_after: {
      type: DataTypes.STRING(11),
      allowNull: true
    },
    date_change: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    date_update: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    type: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    uid: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'ali_poschange',
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
