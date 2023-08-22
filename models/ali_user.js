const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ali_user', {
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
      type: DataTypes.STRING(255),
      allowNull: true
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    usertype: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    object1: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    object2: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    object3: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    object4: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    object5: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    object6: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    object7: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    object8: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    object9: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    object10: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    inv_ref: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    accessright: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    code_ref: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    checkbackdate: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    limitcredit: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    mtype: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'ali_user',
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
