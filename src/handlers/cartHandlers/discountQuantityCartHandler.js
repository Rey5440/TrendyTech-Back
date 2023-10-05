const discountQuantityCart = require("../../controllers/cartControllers/discountQuantityCart");

const discountQuantityCartHandler = async (req, res) => {
  const { userId, productId } = req.body;
  try {
    const product = await discountQuantityCart(userId, productId);
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = discountQuantityCartHandler;
