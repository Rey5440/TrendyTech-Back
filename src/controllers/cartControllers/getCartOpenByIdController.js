const { Cart } = require("../../db/db.js");

const getCartOpenByIdController = async (userId) => {
  try {
    const cart = await Cart.findOne({ where: { userId, status: false } });
    return cart;
  } catch (error) {
    throw new Error({ error: error.message });
  }
};

module.exports = getCartOpenByIdController;
