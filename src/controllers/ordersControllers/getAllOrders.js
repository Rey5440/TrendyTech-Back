const {Sales}= require('../../db/db.js')

const getAllOrders = async () => {
    const response = await Sales.findAll()
    if(!response)throw Error('No hay ordenes');
    return response
}

module.exports = getAllOrders