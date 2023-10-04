const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("cart", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    products: {
      type: DataTypes.ARRAY(DataTypes.JSON),
      allowNull: false,
    },
    total: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });
};
