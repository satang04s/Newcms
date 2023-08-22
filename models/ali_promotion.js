const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ali_promotion', {
    rid: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    rcode: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    rdate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    calc: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    remark: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    fdate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    tdate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    rtype: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    firstseat: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    secondseat: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    rincrease: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    rurl: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    calc_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    tshow: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'ali_promotion',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "rid" },
        ]
      },
      {
        name: "rcode",
        using: "BTREE",
        fields: [
          { name: "rcode" },
        ]
      },
    ]
  });
};
