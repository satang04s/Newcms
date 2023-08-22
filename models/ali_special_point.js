const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ali_special_point', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    vip_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    sadate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    mcode: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    sa_type: {
      type: DataTypes.CHAR(2),
      allowNull: false
    },
    tot_pv: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    uid: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    heal_mouth: {
      type: DataTypes.STRING(6),
      allowNull: false
    },
    ttime: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'ali_special_point',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "mcode",
        using: "BTREE",
        fields: [
          { name: "mcode" },
        ]
      },
      {
        name: "sa_type",
        using: "BTREE",
        fields: [
          { name: "sa_type" },
        ]
      },
    ]
  });
};
