const { Cart } = require("../../db/db.js");

const postCartController = async (userId) => {
  try {
    const existingCart = await Cart.findOne({
      where: { userId, status: false },
    });
    if (existingCart) {
      return existingCart;
    } else {
      const newCart = await Cart.create({
        userId,
      });
      return newCart;
    }
  } catch (error) {
    throw error; // Maneja errores y propaga excepciones.
  }
};

module.exports = postCartController;
