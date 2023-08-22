const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ali_mmbonus', {
    aid: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    rcode: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    mcode: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    name_t: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    total: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    tot_pv: {
      type: DataTypes.DECIMAL(12,5),
      allowNull: false
    },
    tax: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    bonus: {
      type: DataTypes.DECIMAL(15,2),
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
    pos_cur: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    pstatus: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    prcode: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    pmonth: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    crate: {
      type: DataTypes.DECIMAL(11,6),
      allowNull: false
    },
    locationbase: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    chk_status: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'ali_mmbonus',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "aid" },
        ]
      },
    ]
  });
};
