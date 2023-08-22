const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ali_product', {
    pcode: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    group_id: {
      type: DataTypes.INTEGER,
      allowNull: false
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
    vat: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    bprice: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    personel_price: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    customer_price: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    pv: {
      type: DataTypes.INTEGER,
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
    qty: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ud: {
      type: DataTypes.CHAR(1),
      allowNull: false
    },
    sync: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    web: {
      type: DataTypes.STRING(1),
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
    sh: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: ""
    },
    pcode_stock: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    sup_code: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    weight: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    locationbase: {
      type: DataTypes.INTEGER,
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
    sa_type_a: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    sa_type_h: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    qtyr: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ato: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    product_img: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    activated: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    product_class_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cost: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    buffer_stock: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    carton_size: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    height: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    length: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    safety_stock: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    width: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ali_product',
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
      {
        name: "pcode",
        using: "BTREE",
        fields: [
          { name: "pcode" },
        ]
      },
      {
        name: "ali_product_product_class_id_dc10b7a2",
        using: "BTREE",
        fields: [
          { name: "product_class_id" },
        ]
      },
    ]
  });
};
