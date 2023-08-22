const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ali_report_member', {
    mcode: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    name_t: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    mdate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    expdate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    pvdate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    pos_cur: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    pos_cur4: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    pos_cur2: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    pos_cur1: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    new_member: {
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
    pvmonth: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    auto_tot: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    pv_l: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    pv_c: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    tpos_cur: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    sp_code: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    sp_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    lr: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    report1: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    status_ato: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    status_member: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'ali_report_member',
    timestamps: false
  });
};
