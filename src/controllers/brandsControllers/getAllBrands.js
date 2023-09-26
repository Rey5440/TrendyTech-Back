const { Brand } = require("../../db/db");

const getAllBrands = async () => {
    try {
        const brands = await Brand.findAll();
        return brands;
    } catch (error) {
        console.error("Error al obtener todas las marcas:", error);
        throw error; // o maneja el error de manera adecuada según tus necesidades
    }
};

module.exports = getAllBrands;