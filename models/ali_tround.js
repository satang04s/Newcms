const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ali_tround', {
    rcode: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    rname: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    detail: {
      type: DataTypes.TEXT,
      allowNull: false
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
      type: DataTypes.STRING(255),
      allowNull: false
    },
    remark: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    calc: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    calc_date: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'ali_tround',
    timestamps: false
  });
};
