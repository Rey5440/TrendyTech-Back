const getReviewController = require("../../controllers/userController/getReviewController");

const getReviewHandler = async (req, res) => {
    try{
        const allReviews = await getReviewController();
        res.status(200).json(allReviews);
    }catch (error) {
        console.error(error);
        return res.status(400).json({ message: "error getReviewHandler" });
    }
}

module.exports = getReviewHandler;