const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ali_calc_poschange', {
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
      type: DataTypes.CHAR(20),
      allowNull: false,
      defaultValue: ""
    },
    pos_before: {
      type: DataTypes.STRING(11),
      allowNull: true
    },
    pos_after: {
      type: DataTypes.STRING(11),
      allowNull: true
    },
    date_change: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    date_update: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    type: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    up_down: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    uid: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    member_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ali_calc_poschange',
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
        name: "date_change",
        using: "BTREE",
        fields: [
          { name: "date_change" },
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
        name: "ali_calc_poschange_member_id_df5cfd44",
        using: "BTREE",
        fields: [
          { name: "member_id" },
        ]
      },
    ]
  });
};
