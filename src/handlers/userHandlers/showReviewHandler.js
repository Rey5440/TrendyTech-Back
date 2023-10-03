const showReviewController = require("../../controllers/userController/showReviewController");

const showReviewHandler = async (req, res) => {
    const { reviewId } = req.body;
    try {
        const showReview = await showReviewController(reviewId);
        res.status(200).json(showReview)

    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
};

module.exports = showReviewHandler;