const { Cart, Product } = require("../../db/db.js");

const addProdCartController = async (userId, productId) => {
  const foundCart = await Cart.findOne({
    where: { userId, status: false },
  });
  const foundProduct = await Product.findOne({
    where: { id: productId },
  });

  if (foundCart && foundProduct) {
    const productExists = foundCart.dataValues.products.some(
      (product) => product.id === foundProduct.dataValues.id
    );

    if (productExists) {
      return `Ya está en el carrito.`;
    }
    foundProduct.dataValues.quantity = 1;
    const previousProduct = foundCart.dataValues.products;

    const addProd = [...previousProduct, foundProduct.dataValues];

    const total = (foundCart.dataValues.total += foundProduct.dataValues.price);

    await Cart.update({ products: addProd, total }, { where: { userId } });
    const foundUpdatedCart = await Cart.findOne({
      where: { userId, status: false },
    });
    return foundUpdatedCart;
  }
};

module.exports = addProdCartController;
