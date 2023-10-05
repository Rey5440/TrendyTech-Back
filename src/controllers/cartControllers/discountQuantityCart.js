const { Cart } = require("../../db/db.js");

const discountQuantityCart = async (userId, productId) => {
  // restar la cantidad del producto a comprar
  const cart = await Cart.findOne({ where: { userId } });

  let total;
  const products = [];

  try {
    cart.dataValues.products.map((product) => {
      if (product.id === productId) {
        if (product.quantity > 1) {
          product.quantity--;
          total = cart.dataValues.total -= product.price;
        }
      }
      products.push(product);
    });
    await Cart.update(
      {
        products,
        total,
      },
      { where: { userId } }
    );

    const newCart = await Cart.findOne({ where: { userId } });
    return newCart;
  } catch (error) {
    throw new Error({ error: error.message });
  }
};

module.exports = discountQuantityCart;

// const { Cart } = require("../../db/db.js");
// const addQuantityCart = async (userId, productId) => {
//   // sumar la cantidad de productos a comprar
//   const cart = await Cart.findOne({ where: { userId } });

//   let total;
//   const products = [];
//   try {
//     cart.dataValues.products.map((product) => {
//       if (product.id === productId) {
//         product.quantity++;
//         total = cart.dataValues.total += product.price;
//       }
//       products.push(product);
//     });

//     await Cart.update(
//       {
//         products,
//         total,
//       },
//       { where: { userId } }
//     );

//     const newCart = await Cart.findOne({ where: { userId } });
//     return newCart;
//   } catch (error) {
//     throw new Error({ error: error.message });
//   }
// };

// module.exports = addQuantityCart;
