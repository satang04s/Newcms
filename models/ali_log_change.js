const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ali_log_change', {
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
    fdate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    tdate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    mcode: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    mpos: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    status: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    pvb: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    pvh: {
      type: DataTypes.DECIMAL(15,3),
      allowNull: false
    },
    fob: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    cycle: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    ambonus2: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    fmbonus: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    unilevel: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    adjust: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    autoship: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    ewallet_withdraw: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    tot_tax: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    pv: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    total: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    paydate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    date_change: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    com_transfer_chagre: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    uid: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'ali_log_change',
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
        name: "mcode",
        using: "BTREE",
        fields: [
          { name: "mcode" },
        ]
      },
      {
        name: "status",
        using: "BTREE",
        fields: [
          { name: "status" },
        ]
      },
    ]
  });
};
