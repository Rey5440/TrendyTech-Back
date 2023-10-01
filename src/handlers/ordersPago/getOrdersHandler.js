const getAllOrders  = require("../../controllers/ordersControllers/getAllOrders");
const getByIdOrder = require("../../controllers/ordersControllers/getByIdOrder");
const getByTokenUserOrder = require("../../controllers/ordersControllers/getByTokenUserOrder");


const getAllOrdersHandler = async (req, res) => {
    try {
        const orders = await getAllOrders();
        res.status(200).json(orders);
    } catch (error) {
        res.status(400).json( { error: error.message } )
    }
}
const getByIdOrderHandler = async (req, res) => {
    try {
        const { id } = req.params;
        const order = await getByIdOrder(id);
        res.status(200).json(order);
    } catch (error) {
        res.status(400).json( { error: error.message } )
    }
}
const getByTokenUserHandler = async (req, res) => {
    try {
        const { token } = req.params;
        const order = await getByTokenUserOrder(token);
        res.status(200).json(order);
    } catch (error) {
        res.status(400).json( { error: error.message } )
    }
}

module.exports = {
    getAllOrdersHandler,
    getByIdOrderHandler,
    getByTokenUserHandler
}