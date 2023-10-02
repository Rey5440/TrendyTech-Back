const {Order,User}= require('../../db/db.js')
const {emailConfirmBuy} = require('../../helpers/email.js')

const postOrders = async (products,iduser,total) => {
    const user= await User.findByPk(iduser);
    const { email, name } = req.params;
    const newOrder = await Order.create({
        products,
        total,
    })
    newOrder.addUser(user)
    User.addOrder(newOrder)
    emailConfirmBuy({
        email: user.email,
        name: user.name,
      });
    if(!newOrder)throw Error('Hubo un error al crear la orden')
    return newOrder
}

module.exports = postOrders