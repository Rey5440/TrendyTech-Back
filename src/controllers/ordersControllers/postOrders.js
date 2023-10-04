const { Order, User } = require("../../db/db.js");

const postOrders = async (products, userId, total) => {
  const newOrder = await Order.create({
    products,
    total,
    userId
  });
  if (!newOrder) throw Error("Hubo un error al crear la orden");
  return newOrder;
};

module.exports = postOrders;
