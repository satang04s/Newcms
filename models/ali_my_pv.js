const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ali_my_pv', {
    id: {
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
    pos_cur: {
      type: DataTypes.STRING(5),
      allowNull: false
    },
    pv_exp: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    pv: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    status: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    pmonth: {
      type: DataTypes.STRING(6),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'ali_my_pv',
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
