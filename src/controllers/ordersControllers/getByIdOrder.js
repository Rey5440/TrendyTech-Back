const {orders}= require('../../db/db.js')

const getByIdOrder = async (id) => {
    const response = await orders.findByPk(id)
    if(!response)throw Error('No existe la orden con esta id')
    return response;
}

module.exports = getByIdOrder