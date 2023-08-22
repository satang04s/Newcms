const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ali_member_favorite', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    from_member_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    to_member_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'ali_member_favorite',
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
        name: "ali_member_favorite_from_member_id_to_member_id_3bb73fd2_uniq",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "from_member_id" },
          { name: "to_member_id" },
        ]
      },
      {
        name: "ali_member_favorite_from_member_id_324ab3e0",
        using: "BTREE",
        fields: [
          { name: "from_member_id" },
        ]
      },
      {
        name: "ali_member_favorite_to_member_id_63ca81cf",
        using: "BTREE",
        fields: [
          { name: "to_member_id" },
        ]
      },
    ]
  });
};
