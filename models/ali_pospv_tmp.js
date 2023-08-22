const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ali_pospv_tmp', {
    aid: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    rcode: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    mcode: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    opos: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    npos: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    name_t: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    sp_code: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    lr: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    fdate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    tdate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'ali_pospv_tmp',
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
