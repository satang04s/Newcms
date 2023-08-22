const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ali_log_ktc', {
    ref1: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    src: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    prc: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    ord: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    holder: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    successcode: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    ref2: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    payRef: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    amt: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    cur: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    remark: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    authId: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    payerAuth: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    sourcelp: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'ali_log_ktc',
    timestamps: false
  });
};
