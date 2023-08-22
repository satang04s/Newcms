const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ao_detail_with_pro_100', {
    sano: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    member_id: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    mcode: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    sa_type: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    sadate: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    sctime: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    inv_code: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    asaleh_id: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    asaled_sano: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    asaled_date: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    pcode: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    pdesc: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    qty: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    pro_qty: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    reward: {
      type: DataTypes.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'ao_detail_with_pro_100',
    timestamps: false
  });
};
