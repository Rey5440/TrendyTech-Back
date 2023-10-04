const deleteProdCartController = require("../../controllers/cartControllers/deleteProdCartController")

const deleteProdCartHandler = async (req, res) => {
    const { idUser, idProducto } = req.body;
    try {
        const product = await deleteProdCartController(idUser, idProducto);
        res.status(200).json(product)
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
}

module.exports = deleteProdCartHandler;