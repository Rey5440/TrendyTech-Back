const { Cart } = require("../../db/db.js");
const closeCartController = async (userId) => {
  try {
    const cartClosed = await Cart.update(
      { status: true },
      { where: { userId, status: false } }
    );
    return cartClosed;
  } catch (error) {
    throw new Error({ error: error.message });
  }
};

module.exports = closeCartController;
