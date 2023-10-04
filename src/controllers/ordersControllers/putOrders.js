// <<<<<<< HEAD
// const { Order, Product, User } = require('../../db/db.js');
// const { emailConfirmBuy } = require('../../helpers/email.js');


// const putOrders = async (id, status, ticket) => {
//   const updateOrder = await Order.findByPk(id, {
//     include: [{ model: User, attributes: ['email', 'name'] }],
//   });

//   if (!updateOrder) {
//     throw new Error("La orden o carrito no pudo actualizarse.");
//   }

//   if (status === "aproved") updateOrder.status = true;
//   if (ticket !== "null") updateOrder.ticket = ticket;

//   await updateOrder.save();

//   const { email, name } = updateOrder.User; // Accede al usuario asociado a la orden

//   emailConfirmBuy({
//     email: User.email,
//     name: User.name,
//   });
//   // Control de stock
//   let stockErrors = ["No hay stock suficiente en el producto:"];

//   for (const prod of updateOrder.products) {
//     const updateProduct = await Product.findByPk(prod.id);
//     if (updateProduct.stock >= prod.quantity) {
//       updateProduct.stock -= prod.quantity;
//       await updateProduct.save();
//     } else {
//       stockErrors.push(prod.title);
//     }
//   }

//   if (stockErrors.length > 1) {
//     throw new Error(stockErrors.join());
//   }

//   return updateOrder;
// };

// module.exports = putOrders;

// // const {Order,Product, User}= require('../../db/db.js')
// // const {emailConfirmBuy} = require('../../helpers/email.js')

// // const putOrders = async (id,status,ticket, ) => {
  
// //   const updateOrder= await Order.findByPk(id);
// //       if (!updateOrder) {
// //         throw new Error("La orden o carrito no pudo actualizarse.");
// //       }
// //       if (status=="aproved")updateOrder.status=true;
// //       if (ticket!="null")updateOrder.ticket=ticket;
// //       await updateOrder.save();
// //       emailConfirmBuy({
// //         email: ,
// //         name: ,
// //       });
// //       // control de stock
// //       let stockErrors=["No hay stock suficiente en el producto: "];
// //       updateOrder.products.forEach(async (prod)=>{
// //         const updateProduct= await Product.findByPk(prod.id)
// //         if (updateProduct.stock>=prod.quantity){
// //           updateProduct.stock-=prod.quantity
// //           await updateProduct.save()
// //         }
// //         else{
// //           stockErrors.push(prod.title); 
// //         }
// //       })
// //       if (stockErrors.length>1){
// //         throw new Error(stockErrors.join())
// //       }

// // const putOrders = async (token,status,ticket) => {
// //   const {id}= await User.findOne({where:{token}})
// //   const updateOrder= await Order.findOne({where:{userId:id}});
// //       if (!updateOrder) {
// //         throw new Error("La orden o carrito no pudo actualizarse.");
// //       }
// //       if (status=="aproved")updateOrder.status=true;
// //       if (ticket!="null")updateOrder.ticket=ticket;
// //       await updateOrder.save();
      
// //       // control de stock
// //       let stockErrors=["No hay stock suficiente en el producto: "];
// //       updateOrder.products.forEach(async (prod)=>{
// //         const updateProduct= await Product.findByPk(prod.id)
// //         if (updateProduct.stock>=prod.stock){
// //           updateProduct.stock-=prod.stock
// //           await updateProduct.save()
// //         }
// //         else{
// //           stockErrors.push(prod.name); 
// //         }
// //       })
// //       if (stockErrors.length>1){
// //         stockErrors.join()
// //         throw new Error(stockErrors)
// //       }


// //       return updateOrder  
// // }
// // module.exports = putOrders
// =======
const { Order, Product } = require("../../db/db.js");

const putOrders = async (userId, status, ticket) => {
  const updateOrder = await Order.findOne({ where: { userId } });

  if (updateOrder) {
    if (status === "approved") {
      updateOrder.status = true;
      updateOrder.ticket = ticket;
    }
  }

  // control de stock
  let stockErrors = ["No hay stock suficiente en el producto: "];
  updateOrder.products.forEach(async (prod) => {
    const updateProduct = await Product.findByPk(prod.id);

    if (updateProduct.stock >= prod.quantity) {
      updateProduct.stock -= prod.quantity;
      prod.stock = updateProduct.stock;
      await updateProduct.save();
    } else {
      console.log("error!");
      stockErrors.push(prod.name);
    }
  });
  if (stockErrors.length > 1) {
    stockErrors.join();
    throw new Error(stockErrors);
  }
  await updateOrder.save();
  return updateOrder;
};
module.exports = putOrders;
// >>>>>>> Loker
