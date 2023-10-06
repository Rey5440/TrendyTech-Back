const getRevByIdProdController = require("../../controllers/userController/getRevByIdProdController");

const getRevByIdProdHandler = async (req, res) => {

    const { productIdRev } = req.body

    try{
        const review = await getRevByIdProdController(productIdRev);
        res.status(200).json(review);
    }catch (error) {
        console.error(error);
        return res.status(400).json({ message: "error getRevByIdProdHandler" });
    }
}

module.exports = getRevByIdProdHandler;