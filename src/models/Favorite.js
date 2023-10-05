const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Favorite",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      favorites: {
        type: DataTypes.ARRAY(DataTypes.JSON),
        allowNull: false,
      },
    },
    { freezeTableName: true, timestamps: false }
  );
};