const postOrders = require("../../controllers/ordersControllers/postOrders");

const postOrdersHandler = async (req, res) => {
  const { products, userId, total } = req.body;
  try {
    const response = await postOrders(products, userId, total);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = postOrdersHandler;
