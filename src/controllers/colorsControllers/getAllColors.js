const { Color } = require("../../db/db");

const getAllColors = async () => {
    try {
        const colors = await Color.findAll();
        return colors;
    } catch (error) {
        console.error("Error al obtener todos los colores:", error);
        throw error; // o maneja el error de manera adecuada según tus necesidades
    }
};

module.exports = getAllColors;