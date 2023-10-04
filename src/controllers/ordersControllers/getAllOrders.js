// <<<<<<< HEAD
// const {Sales}= require('../../db/db.js')

// const getAllOrders = async () => {

//     // const response = await Sales.findAll()

//     const response = await Order.findAll({include:{model:User}})

//     if(!response)throw Error('No hay ordenes');
//     return response
// }
// =======
const { Order, User } = require("../../db/db.js");

const getAllOrders = async () => {
  const response = await Order.findAll({ include: User });
  if (!response) throw Error("No hay ordenes");
  return response;
};
// >>>>>>> Loker

module.exports = getAllOrders;
