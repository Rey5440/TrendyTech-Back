const { Order, User } = require("../../db/db.js");

const getAllOrders = async () => {
  const response = await Order.findAll({ include: User });
  if (!response) throw Error("No hay ordenes");
  return response;
};

module.exports = getAllOrders;
