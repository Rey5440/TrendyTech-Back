const getCartOpenByIdController = require("../../controllers/cartControllers/getCartOpenByIdController.js");

const getCartOpenByIdHandler = async (req, res) => {
  const { userId } = req.params;
  try {
    const response = await getCartOpenByIdController(userId);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
};

module.exports = getCartOpenByIdHandler;
