const { Cart, Product } = require("../../db/db.js");

const deleteProdCartController = async (userId, productId) => {
  const foundCart = await Cart.findOne({
    where: { userId },
  });

  if (foundCart) {
    const productExists = foundCart.dataValues.products.some(
      (product) => product.id === productId
    );
    if (productExists) {
      let total;
      foundCart.dataValues.products.forEach((product) => {
        if (product.id === productId) {
          totalProd = product.quantity * product.price;
          total = foundCart.dataValues.total - totalProd;
        }
      });
      const arrayProds = foundCart.dataValues.products;
      const arrayFiltered = arrayProds.filter(
        (product) => product.id !== productId
      );
      await Cart.update(
        {
          products: arrayFiltered,
          total,
        },
        { where: { userId } }
      );
      const foundCartUpdated = await Cart.findOne({
        where: { userId },
      });
      return foundCartUpdated;
    } else {
      throw new Error(`El producto no se encuentra en el carrito.`);
    }
  } else {
    throw new Error("El usuario no posee carrito.");
  }
};

module.exports = deleteProdCartController;
