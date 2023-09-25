// imports
const {Router}=require('express')
const postMercadoPagoHandlers = require('../handlers/mercadoPago/postMercadoPagoHandlers')
const mpRoutes = Router()

// routes phatnames
mpRoutes.post('/create_preference',postMercadoPagoHandlers)


// export
module.exports = mpRoutes