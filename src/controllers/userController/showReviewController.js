const { Reviews } = require("../../db/db");

const showReviewController = async (reviewId) => {
    try {
        const review = await Reviews.findByPk(reviewId);
        if (!review) {
            throw new Error("Review no encontrada");
        }
        review.isVisible = !review.isVisible;
        await review.save();
        return review;
    } catch (error) {
        throw new Error(error.message);
    }
};

module.exports = showReviewController;