const { Router } = require("express");
const router = Router();

const newProductHandler = require("../../handlers/products/newProductsHandler");
const getAllProductsOrByName = require('../../handlers/products/getProductsHandler');

const {filterProducts} = require('../../controllers/productsControllers/filterProducts')


router.get("/", getAllProductsOrByName);
router.get('/name?', getAllProductsOrByName)

router.get('/filter?', filterProducts)

router.post("/create", newProductHandler);
// router.get('/', getAllOrByNameProducts)
// router.get('/:id', getProductById)

module.exports = router;
