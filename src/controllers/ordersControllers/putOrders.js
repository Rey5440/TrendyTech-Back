const { Order, Product } = require("../../db/db.js");

const putOrders = async (id, status, ticket) => {
  const updateOrder = await Order.findOne({ where: { userId: id } });
  
  if (updateOrder) {

    
    if (status === "approved") {
      updateOrder.status = true;
      updateOrder.ticket = ticket;
    }


  }
  await updateOrder.save();

  // control de stock
  let stockErrors = ["No hay stock suficiente en el producto: "];
  updateOrder.productos.forEach(async (prod) => {
    const updateProduct = await Product.findByPk(prod.id);
    if (updateProduct.stock >= prod.stock) {
      updateProduct.stock -= prod.stock;
      await updateProduct.save();
    } else {
      stockErrors.push(prod.name);
    }
  });
  if (stockErrors.length > 1) {
    stockErrors.join();
    throw new Error(stockErrors);
  }

  return updateOrder;
};
module.exports = putOrders;
