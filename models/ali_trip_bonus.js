const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ali_trip_bonus', {
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
    pv_private: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    pv_team: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    pv_use_private: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    pv_use_team: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    total_pv_private: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    total_pv_team: {
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
    status: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'ali_trip_bonus',
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
