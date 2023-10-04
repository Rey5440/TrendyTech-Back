const deleteProductController = require("../../controllers/productsControllers/deleteProductController");

const deleteProductHandler = async (req, res) => {
    const { productId } = req.body;
    try {
        const product = await deleteProductController(productId);
        res.status(200).json(product)

    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
};

module.exports = deleteProductHandler;