const { Router } = require('express');

const productRoutes = require('./products/productsRoutes.js');
const userRoutes = require('./userRoutes.js')
const mpRoutes = require('./mpRoutes')

const router = Router();


router.use('/users', userRoutes)
router.use('/products', productRoutes)
router.use("/mercadoPago",mpRoutes)


module.exports = router;
