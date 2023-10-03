const { Reviews } = require("../../db/db");

const getReviewController = async () => {
    try {
        const allReviews = await Reviews.findAll();
        return allReviews;
    } catch (error) {
        console.error("Error al obtener todos los colores:", error);
        throw new Error(error.message);
    }
};

module.exports = getReviewController;