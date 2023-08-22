const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ali_invent', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    inv_code: {
      type: DataTypes.STRING(7),
      allowNull: true
    },
    inv_desc: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    inv_type: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    code_ref: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    address: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    districtId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    amphurId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    provinceId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    zip: {
      type: DataTypes.STRING(5),
      allowNull: false
    },
    home_t: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    uid: {
      type: DataTypes.INTEGER,
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
    ewallet: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    voucher: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    bewallet: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    bvoucher: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    discount: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    locationbase: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    bill_ref: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    fax: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    no_tax: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    type: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    district: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    post_code: {
      type: DataTypes.STRING(8),
      allowNull: false
    },
    province: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    sub_district: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    branch_number: {
      type: DataTypes.STRING(16),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ali_invent',
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
