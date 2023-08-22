const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ali_fc', {
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
    mposi: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    upa_code: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    upa_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    bposi: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    level: {
      type: DataTypes.DECIMAL(15,0),
      allowNull: false
    },
    gen: {
      type: DataTypes.DECIMAL(15,0),
      allowNull: false
    },
    btype: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    pv: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    percer: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    total: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    total_r: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    ctax: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    cvat: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    amt: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    oon: {
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
    crate: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    locationbase: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    sano: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    pcode: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    qty: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'ali_fc',
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
