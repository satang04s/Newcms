const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ali_stockcard_e', {
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
    inv_ref: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    inv_action: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    sano: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    sano_ref: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    pcode: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    pdesc: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    in_amount: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    out_amount: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    sadate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    rdate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    rccode: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    yokma: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    balance: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    price: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    amount: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    uid: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    action: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'ali_stockcard_e',
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
        name: "inv_action",
        using: "BTREE",
        fields: [
          { name: "inv_action" },
          { name: "pcode" },
          { name: "sadate" },
        ]
      },
    ]
  });
};
