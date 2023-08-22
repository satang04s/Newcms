const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('system_log_logtravelcredit', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    mcode: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    inv_code: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    sadate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    satime: {
      type: DataTypes.TIME,
      allowNull: false
    },
    sano: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    _in: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    _out: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    total: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    uid: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    sa_type: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    _option: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'system_log_logtravelcredit',
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
