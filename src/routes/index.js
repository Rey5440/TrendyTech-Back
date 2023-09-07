const { Router } = require('express');
const router = Router();

const productRoutes = require('./products/productsRoutes.js');

router.use('/products', productRoutes)

module.exports = router;