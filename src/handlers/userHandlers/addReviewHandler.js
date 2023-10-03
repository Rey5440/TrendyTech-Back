const addReviewController = require("../../controllers/userController/addReviewController");

const addReviewHandler = async (req, res) => {
    const { userId, productId, textReview, stars } = req.body;
    console.log('pase por el handler')
    try {
        const review = await addReviewController(userId, productId, textReview, stars);
        res.status(200).json(review)

    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
};

module.exports = addReviewHandler;