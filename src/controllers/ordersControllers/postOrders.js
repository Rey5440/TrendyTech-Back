const { Order, User } = require("../../db/db.js");

const postOrders = async (products, idUser, total) => {
  const newOrder = await Order.create({
    productos: products,
    total,
    userId: idUser
  });
  if (!newOrder) throw Error("Hubo un error al crear la orden");
  return newOrder;
};

module.exports = postOrders;
