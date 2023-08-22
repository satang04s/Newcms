const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ali_special_point_group', {
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
      allowNull: true
    },
    mcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    sa_type: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    tot_pv: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    uid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    heal_mouth: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    ttime: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'ali_special_point_group',
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
    ]
  });
};
