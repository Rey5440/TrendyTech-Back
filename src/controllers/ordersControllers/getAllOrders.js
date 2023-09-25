const {orders}= require('../../db/db.js')

const getAllOrders = async () => {
    const response = await orders.findAll()
    if(!response)throw Error('No hay ordenes');
    return response
}

module.exports = getAllOrders