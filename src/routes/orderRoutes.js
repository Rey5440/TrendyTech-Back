const {Router}=require('express')
const postOrderHandler = require('../handlers/ordersPago/postOrdersHandler')
const putOrderHandler = require('../handlers/ordersPago/putOrdersHandler')
const { getByIdOrderHandler,getAllOrdersHandler } = require('../handlers/ordersPago/getOrdersHandler')
const orderRoutes=Router()

orderRoutes.get('/',getAllOrdersHandler)
orderRoutes.get('/:id',getByIdOrderHandler)
orderRoutes.post('/create',postOrderHandler)
orderRoutes.put('/update/:id',putOrderHandler)

module.exports=orderRoutes