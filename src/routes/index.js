const { Router } = require('express');

const productRoutes = require('./products/productsRoutes.js');
const userRoutes = require('./userRoutes')

const router = Router();


router.use('/users', userRoutes)
router.use('/products', productRoutes)


module.exports = router;
