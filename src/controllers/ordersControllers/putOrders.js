const { preferences } = require('mercadopago');
const {order,product}= require('../../db/db.js')

const putOrders = async (id,status,ticket) => {
  const updateOrder= await order.find({where:{idpreference:id}})
      if (!updateOrder) {
        throw new Error("La orden o carrito no pudo actualizarse.");
      }
      if (status=="aproved")updateOrder.status=true;
      if (ticket!="null")updateOrder.ticket=ticket;
      await updateOrder.save();

      // control de stock
      let stockErrors=["No hay stock suficiente en el producto: "];
      updateOrder.products.forEach(async (product)=>{
        const updateProduct= await product.findByPk(product.id)
        if (updateProduct.stock>=product.quantity){
          updateProduct.stock-=product.quantity
          await updateProduct.save()
        }
        else{
          stockErrors.push(product.title); 
        }
      })
      if (stockErrors.length>1){
        throw new Error(stockErrors.join())
      }
      return updateOrder  
}
module.exports = putOrders