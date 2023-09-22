const { Router } = require('express');

const productRoutes = require('./products/productsRoutes.js');
const userRoutes = require('./userRoutes')
const mpRoutes = require('./mpRoutes')

const router = Router();


router.use('/users', userRoutes)
router.use('/products', productRoutes)
router.use("/checkout",mpRoutes)


module.exports = router;
