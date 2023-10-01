const {Order,User}= require('../../db/db.js')

const postOrders = async (products,token,total) => {
    const user= await User.findOne({where:{token}})
    if(!user)throw Error('Usuario no encontrado')
    const newOrder = await Order.create({
        products,
        total,
    })
    newOrder.addUser(user)
    user.addOrder(newOrder)
    if(!newOrder)throw Error('Hubo un error al crear la orden')
    return newOrder
}

module.exports = postOrders