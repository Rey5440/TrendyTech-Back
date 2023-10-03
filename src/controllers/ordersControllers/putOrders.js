const { Order, Product } = require("../../db/db.js");

const putOrders = async (userId, status, ticket) => {
  const updateOrder = await Order.findOne({ where: { userId } });

  if (updateOrder) {
    if (status === "approved") {
      updateOrder.status = true;
      updateOrder.ticket = ticket;
    }
    // control de stock
    let stockErrors = ["No hay stock suficiente en el producto: "];
    updateOrder.products.forEach(async (prod) => {
      const updateProduct = await Product.findOne({ where: { id: prod.id } });

      if (updateProduct.stock >= prod.quantity) {
        updateProduct.stock -= prod.quantity;
        await updateProduct.save();
        prod.stock = updateProduct.stock;
      } else {
        console.log("error!");
        stockErrors.push(prod.name);
      }
    });
    if (stockErrors.length > 1) {
      stockErrors.join();
      throw new Error(stockErrors);
    }
  }

  await updateOrder.save();
  return updateOrder;
};
module.exports = putOrders;
