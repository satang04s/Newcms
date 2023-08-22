const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ali_subuser', {
    uid: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    usercode: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    username: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    password: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    object1: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    object2: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    object3: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    object4: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    object5: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    accessright: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ali_subuser',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "uid" },
        ]
      },
    ]
  });
};
