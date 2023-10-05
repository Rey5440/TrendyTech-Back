const deleteProdCartController = require("../../controllers/cartControllers/deleteProdCartController");

const deleteProductHandler = async (req, res) => {
  const { userId, productId } = req.body;
  try {
    const product = await deleteProdCartController(userId, productId);
    res.status(200).json(product);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

module.exports = deleteProductHandler;
