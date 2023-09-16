const { Router } = require("express");
const router = Router();

const newProductHandler = require("../../handlers/products/newProductsHandler");
const {getAllOrByNameProducts, getProductByIdHandler} = require('../../handlers/products/getProductsHandler');

const {productsHandler} = require('../../handlers/products/filterProductsHandler')

router.get("/", getAllOrByNameProducts);
router.get('/name?', getAllOrByNameProducts)
router.get('/filter?', productsHandler)
router.get("/:id", getProductByIdHandler)

router.post("/create", newProductHandler);


module.exports = router;
