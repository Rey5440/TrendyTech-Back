const { postOrders } = require("../../controllers/ordersControllers/postOrders");


const postOrdersHandler = async (req, res) => {
    const { products,token,total } = req.body;
    try {
        const response = await postOrders( products,token,total );
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json( { error: error.message})
    }
}

module.exports = postOrdersHandler