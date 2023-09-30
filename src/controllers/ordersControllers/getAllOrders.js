const {Order}= require('../../db/db.js')

const getAllOrders = async () => {
    const response = await Order.findAll({include:{model:User}})
    if(!response)throw Error('No hay ordenes');
    return response
}

module.exports = getAllOrders