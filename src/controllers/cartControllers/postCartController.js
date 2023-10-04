const { Cart } = require("../../db/db.js");

const postCartController = async (userId, product) => {
  try {
    const newCart = await Cart.create({
      userId,
    });
    return newCart;
  } catch (error) {
    throw error; // Maneja errores y propaga excepciones.
  }
};

module.exports = postCartController;
