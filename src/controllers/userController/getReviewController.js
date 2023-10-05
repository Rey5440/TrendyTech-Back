const { Reviews } = require("../../db/db");

const getReviewController = async () => {
    try {
        const allReviews = await Reviews.findAll();
        return allReviews;
    } catch (error) {
        console.error("Error al obtener todas las reviews:", error);
        throw new Error(error.message);
    }
};

module.exports = getReviewController;