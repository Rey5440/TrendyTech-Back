// imports
const {Router}=require('express')
const postMercadoPago = require('../handlers/mercadoPago/postMercadoPagoHandlers')
const mpRoutes = Router()


// routes phatnames
mpRoutes.post('/create_preference',postMercadoPago)

// export
module.exports = mpRoutes