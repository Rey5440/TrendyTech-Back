const putOrders = require("../../controllers/ordersControllers/putOrders");

const putOrdersHandler = async (req, res) => {
  const { userId } = req.params;
  const { status, ticket } = req.body;
  try {
    const response = await putOrders(userId, status, ticket);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = putOrdersHandler;
