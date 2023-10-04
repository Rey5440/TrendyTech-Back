// <<<<<<< HEAD
// const {Order,User}= require('../../db/db.js')
// const {emailConfirmBuy} = require('../../helpers/email.js')


// // const postOrders = async (products,iduser,total) => {
// //     const user= await User.findByPk(iduser);
// //     const { email, name } = req.params;

// const postOrders = async (products,token,total) => {
//     const user= await User.findOne({where:{token}})
//     if(!user)throw Error('Usuario no encontrado')

//     const newOrder = await Order.create({
//         products,
//         total,
//     })
//     newOrder.addUser(user)
//     User.addOrder(newOrder)
//     emailConfirmBuy({
//         email: user.email,
//         name: user.name,
//       });
//     if(!newOrder)throw Error('Hubo un error al crear la orden')
//     return newOrder
// }
// =======
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
// >>>>>>> Loker

module.exports = postOrders;
