const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("reviews", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'users', // nombre de la tabla (por lo general, en plural)
                key: 'id'
            }
        },
        productId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'products', // nombre de la tabla (por lo general, en plural)
                key: 'id'
            }
        },
        text: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        isVisible: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        punctuation: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    },{ 
        timestamps: true 
    });
}

