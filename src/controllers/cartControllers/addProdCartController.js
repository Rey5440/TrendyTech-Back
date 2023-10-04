const { Cart, Product } = require("../../db/db.js");

const addProdCartController = async (userId, productId) => {
  const foundCart = await Cart.findOne({
    where: { userId },
  });
  const foundProduct = await Product.findOne({
    where: { id: productId },
  });

  console.log(foundCart.dataValues);
  console.log(foundProduct.dataValues);

  if (foundCart) {
    foundProduct.dataValues.quantity = 1;
    const productExists = foundCart.dataValues.products.some(
      (product) => product.id === foundProduct.id
    );
    if (!productExists) {
      foundCart.dataValues.products.push(foundProduct);
      foundCart.dataValues.total += foundProduct.dataValues.price;
    }
    await foundCart.save();
    return foundCart;
  }
};

module.exports = addProdCartController;
