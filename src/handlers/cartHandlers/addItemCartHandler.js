const { addItemCartController } = require("../../controllers/cartControllers/addItemCartController");

const addItemCartHandler = async (req, res) => {
    const { idUser, idProducto } = req.body;
    try{
        const response = await addItemCartController(idUser, idProducto);
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({ error: error.message});
    }
}

module.exports = addItemCartHandler;