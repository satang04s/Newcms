const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ali_ostockh', {
    sano: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    sano1: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    sadate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    sctime: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    inv_code: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    inv_coden: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    inv_ref: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    inv_refn: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    total: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    tot_pv: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    sa_type: {
      type: DataTypes.CHAR(2),
      allowNull: false
    },
    sa_mtype: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    uid: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    uid_ref: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    cancel: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    txtoption: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    sender: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    sender_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    receive: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    receive_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    uid_receive: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    print: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    rccode: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    update_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    mapping_code: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    rrcode: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    auto: {
      type: DataTypes.STRING(10),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ali_ostockh',
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
        name: "sano",
        using: "BTREE",
        fields: [
          { name: "sano" },
        ]
      },
      {
        name: "sadate",
        using: "BTREE",
        fields: [
          { name: "sadate" },
        ]
      },
    ]
  });
};
