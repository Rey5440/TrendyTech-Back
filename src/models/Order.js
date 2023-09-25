const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("order", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    iduser:{
        type: DataTypes.STRING,
        allowNull: true,
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
    idpreference:{
        type: DataTypes.STRING,
        allowNull: true,

    },
    productos:{
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
    }
    
  },{
    timestamps:true
  });
};