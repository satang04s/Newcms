const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ali_em', {
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
    mcode: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    mpos: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    name_t: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    pv: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    share: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    percer: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    total: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    total1: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    total2: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    total3: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    total4: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    total5: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    total6: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    pershare: {
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
    pv_world: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    pools: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    pos_cur: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    pos_cur1: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    weak: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    oon: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    exp: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    member_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ali_em',
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
        name: "id",
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
        name: "ali_em_member_id_6967409f",
        using: "BTREE",
        fields: [
          { name: "member_id" },
        ]
      },
    ]
  });
};
