const {Order}= require('../../db/db.js')

const getByIdOrder = async (idUser) => {
    const response = await Order.findByPk(idUser)
    if(!response)throw Error('No existe la orden con esta id')
    return response;
}

module.exports = getByIdOrder