const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('hold_expire', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    stampDate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    pv: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    remaining: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    member_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    offset_day: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    stack_type: {
      type: DataTypes.STRING(4),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'hold_expire',
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
        name: "hold_expire_member_id_807edbc3",
        using: "BTREE",
        fields: [
          { name: "member_id" },
        ]
      },
    ]
  });
};
