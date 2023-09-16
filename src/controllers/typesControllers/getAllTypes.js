const { TypeProduct } = require("../../db/db");

const getAllTypes = async () => {
    try {
        const type = await TypeProduct.findAll();
        return type;
    } catch (error) {
        console.error("Error al obtener todos los tipos:", error);
        throw error; // o maneja el error de manera adecuada según tus necesidades
    }
};

module.exports = getAllTypes;