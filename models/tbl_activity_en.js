const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_activity_en', {
    act_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    act_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    desc_s: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    desc_l: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    image: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    short: {
      type: DataTypes.STRING(5),
      allowNull: false
    },
    imageSlide: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    start_date: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    end_date: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    slideshow: {
      type: DataTypes.STRING(5),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'tbl_activity_en',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "act_id" },
        ]
      },
    ]
  });
};
