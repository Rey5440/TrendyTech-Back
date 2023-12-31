const { Router } = require("express");
const router = Router();

const newProductHandler = require("../../handlers/products/newProductsHandler");
const {getAllOrByNameProducts, getProductByIdHandler} = require('../../handlers/products/getProductsHandler');
const getAllBrandsHandler = require("../../handlers/products/getAllBrandsHandler");
const getAllColorsHandler = require("../../handlers/products/getAllColorsHandler");
const getAllTypesHandler = require("../../handlers/products/getAllTypesHandlers");

const {productsHandler} = require('../../handlers/products/filterProductsHandler');
const updateProductHandler = require("../../handlers/products/updateProductHandler");
const deleteProductHandler = require("../../handlers/products/deleteProductHandler");
const getRevByIdProdHandler = require("../../handlers/userHandlers/getRevByIdProdHandler");

router.get("/", getAllOrByNameProducts);
router.get('/name?', getAllOrByNameProducts)
router.get('/filter?', productsHandler)
router.put('/delete', deleteProductHandler)
router.get("/brands", getAllBrandsHandler)
router.get("/colors", getAllColorsHandler)
router.get("/types", getAllTypesHandler)
router.post('/getrevbyid', getRevByIdProdHandler)
router.get("/:id", getProductByIdHandler)
router.post("/create", newProductHandler);
router.put("/update", updateProductHandler);


module.exports = router;
