const deleteProdCartController = require("../../controllers/cartControllers/deleteProdCartController")

const deleteProductHandler = async (req, res) => {
    const { userid, productid } = req.body;
    try {
        const product = await deleteProdCartController(userid, productid);
        res.status(200).json(product)
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
}

module.exports = deleteProductHandler;