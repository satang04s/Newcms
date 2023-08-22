const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ali_tax', {
    cid: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    locationbase: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    minaccamount: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    maxaccamount: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    vatlocal: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    vatforeign: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    taxlocal: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    taxforeign: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    mtype: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'ali_tax',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "cid" },
        ]
      },
    ]
  });
};
