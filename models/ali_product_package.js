const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ali_product_package', {
    pcode: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    sa_type: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    pdesc: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    unit: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    price: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    bprice: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    customer_price: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    pv: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    special_pv: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    bv: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    fv: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    weight: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    qty: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    st: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    sst: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    bf: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ato: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ud: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    locationbase: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    barcode: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    picture: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    fdate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    tdate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    pos_mb: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    pos_su: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    pos_ex: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    pos_br: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    pos_si: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    pos_go: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    pos_pl: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    pos_pe: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    pos_ru: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    pos_sa: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    pos_em: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    pos_di: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    pos_bd: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    pos_bl: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    pos_cd: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    pos_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    pos_pd: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    pos_rd: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    vat: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    activated: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    product_img: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    cost: {
      type: DataTypes.DOUBLE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'ali_product_package',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "pcode" },
        ]
      },
    ]
  });
};
