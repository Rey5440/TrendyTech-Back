const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("sales", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
  });
};
