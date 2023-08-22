const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ali_report_point1', {
    mcode: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    name_t: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    point: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    monthpv: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    carry_l: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    carry_c: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ro_l: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ro_c: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    all_l: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    all_c: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    allpv: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    pos_cur: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    new_sponsor: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    new_sup: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    new_ex: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    sup_ex: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    travelpoint: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'ali_report_point1',
    timestamps: false
  });
};
