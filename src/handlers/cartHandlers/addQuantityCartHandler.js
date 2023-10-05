const addQuantityCart = require("../../controllers/cartControllers/addQuantityCart");

const addQuantityCartHandler = async (req, res) => {
  const { userId, productId } = req.body;
  try {
    const product = await addQuantityCart(userId, productId);
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = addQuantityCartHandler;
