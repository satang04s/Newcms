const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ali_checkdownline', {
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
    fast: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    weakstrong: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    matching: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    star: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    onetime: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    alltotal: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    upa_code: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    lv: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    lr: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    mdate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    id_card: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'ali_checkdownline',
    timestamps: false
  });
};
