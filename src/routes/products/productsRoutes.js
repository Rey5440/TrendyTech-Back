const { Router } = require("express");
const router = Router();

const newProductHandler = require("../../handlers/products/newProductsHandler");
const getAllProductsOrByName = require('../../handlers/products/getProductsHandler');

<<<<<<< HEAD
const {filterProducts} = require('../../controllers/productsControllers/filterProducts')
=======
const {filter} = require('../../controllers/productsControllers/filterProducts')
>>>>>>> db06d647b35502587d2fb3b10c7e7178becea428


router.get("/", getAllProductsOrByName);
router.get('/name?', getAllProductsOrByName)

<<<<<<< HEAD
router.get('/filter?', filterProducts)
=======
router.get('/filter?', filter)
>>>>>>> db06d647b35502587d2fb3b10c7e7178becea428

router.post("/create", newProductHandler);
// router.get('/', getAllOrByNameProducts)
// router.get('/:id', getProductById)

module.exports = router;
