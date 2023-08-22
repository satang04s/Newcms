const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ali_dmbonus', {
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
    adjust: {
      type: DataTypes.DECIMAL(15,2),
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
    crate: {
      type: DataTypes.DECIMAL(11,2),
      allowNull: false
    },
    locationbase: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    member_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ali_dmbonus',
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
      {
        name: "ali_dmbonus_member_id_0e842637",
        using: "BTREE",
        fields: [
          { name: "member_id" },
        ]
      },
    ]
  });
};
