const { Router } = require("express");
const router = Router();

const newProductHandler = require("../../handlers/products/newProductsHandler");
const getAllProductsOrByName = require('../../handlers/products/getProductsHandler');

router.post("/create", newProductHandler);
router.get("/", getAllProductsOrByName);
router.get('/name?', getAllProductsOrByName)

// router.get('/', getAllOrByNameProducts)
// router.get('/:id', getProductById)

module.exports = router;
