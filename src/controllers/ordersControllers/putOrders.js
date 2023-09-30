const {Order,Product}= require('../../db/db.js')

const putOrders = async (id,status,ticket) => {
  
  const updateOrder= await Order.findByPk(id);
      if (!updateOrder) {
        throw new Error("La orden o carrito no pudo actualizarse.");
      }
      if (status=="aproved")updateOrder.status=true;
      if (ticket!="null")updateOrder.ticket=ticket;
      await updateOrder.save();
      
      // control de stock
      let stockErrors=["No hay stock suficiente en el producto: "];
      updateOrder.products.forEach(async (prod)=>{
        const updateProduct= await Product.findByPk(prod.id)
        if (updateProduct.stock>=prod.quantity){
          updateProduct.stock-=prod.quantity
          await updateProduct.save()
        }
        else{
          stockErrors.push(prod.title); 
        }
      })
      if (stockErrors.length>1){
        throw new Error(stockErrors.join())
      }

      return updateOrder  
}
module.exports = putOrders