const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ali_pc', {
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
    mposi: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    upa_code: {
      type: DataTypes.STRING(255),
      allowNull: true
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
    }
  }, {
    sequelize,
    tableName: 'ali_pc',
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
