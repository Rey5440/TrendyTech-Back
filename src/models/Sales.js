const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("sales", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    mpId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  });
};
