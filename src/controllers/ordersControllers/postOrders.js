const {Order,User}= require('../../db/db.js')

const postOrders = async (products,iduser,total) => {
    const user= await User.findByPk(iduser);
    const newOrder = await Order.create({
        products,
        total,
    })
    newOrder.addUser(user)
    User.addOrder(newOrder)
    if(!newOrder)throw Error('Hubo un error al crear la orden')
    return newOrder
}

module.exports = postOrders