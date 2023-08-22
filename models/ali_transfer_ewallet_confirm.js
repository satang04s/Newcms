const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ali_transfer_ewallet_confirm', {
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
    pay_type: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    sadate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    sctime: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    total: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    img_pay: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    approved_uid: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    approved_sctime: {
      type: DataTypes.DATE,
      allowNull: false
    },
    approved_status: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    cancel_uid: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    cancel_sctime: {
      type: DataTypes.DATE,
      allowNull: false
    },
    cancel_status: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    last_sctime: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    sano_ref: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'ali_transfer_ewallet_confirm',
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
