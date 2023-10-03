const { Reviews } = require("../../db/db");

const addReviewController = async (userId, productId, textReview, stars) => {

    try {
        const [review, created] = await Reviews.findOrCreate({
            where: {
                userId: userId,
                productId: productId
            },
            defaults: {
                text: textReview,
                isVisible: false,
                punctuation: stars
            }
        });

        if (!created && review) {
            await review.update({ 
                text: textReview,
                punctuation: stars
            }); // si existia le cambia el text
        }

        return review;
    } catch (error) {
        throw new Error(error.message);
    }
};

module.exports = addReviewController;