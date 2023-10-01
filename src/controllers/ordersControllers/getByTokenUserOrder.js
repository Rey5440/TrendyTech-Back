const {Order,User} = require ('../../db/db.js')

const getByTokenUserOrder = async (token) => {
    const findUser = await User.findOne({where:{token}})
    if(!findUser)throw Error('Usuario no encontrado')
    const order = await Order.findOne({where:{userId:findUser.id}})
    if(!order)throw Error('No existe la orden con esta token')
    return order
}

module.exports = getByTokenUserOrder