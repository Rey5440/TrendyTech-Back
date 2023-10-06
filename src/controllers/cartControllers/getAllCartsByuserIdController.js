const { Cart } = require("../../db/db.js");

const getAllCartsByuserIdController = async (userId) => {
  try {
    const cart = await Cart.findAll({ where: { userId, status: true } });
    return cart;
  } catch (error) {
    throw new Error({ error: error.message });
  }
};

module.exports = getAllCartsByuserIdController;