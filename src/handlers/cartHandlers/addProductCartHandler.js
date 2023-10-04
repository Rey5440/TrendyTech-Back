const addProdCartController = require("../../controllers/cartControllers/addProdCartController");

const addProductCartHandler = async (req, res) => {
  const { userId, productId } = req.body;
  try {
    const response = await addProdCartController(userId, productId);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = addProductCartHandler;
