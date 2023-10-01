const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("order", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    status:{
        type: DataTypes.BOOLEAN,
        defaultValue:false
    },
    total:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    ticket:{
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue:'null'
    },
    products:{
        type: DataTypes.ARRAY(DataTypes.JSON),
        allowNull: false,
    }
  },{
    timestamps:true
  });
};
