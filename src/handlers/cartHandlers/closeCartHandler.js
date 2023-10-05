const closeCartController = require("../../controllers/cartControllers/closeCartController");

const closeCartHandler = async (req, res) => {
  const { userId } = req.params;

  try {
    const response = await closeCartController(userId);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
};

module.exports = closeCartHandler;