const {orders}= require('../../db/db.js')

const postOrders = async (products,iduser,total,idpreference) => {
    const response = await orders.create({
        products,
        iduser,
        total,
        idpreference
    })
    if(!response)throw Error('Hubo un error al crear la orden')
    return response
}

module.exports = postOrders