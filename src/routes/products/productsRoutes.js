const { Router } = require("express");
const router = Router();

const newProductHandler = require("../../handlers/products/newProductsHandler");
const {getAllOrByNameProducts, getProductByIdHandler} = require('../../handlers/products/getProductsHandler');

const {filter} = require('../../controllers/productsControllers/filterProducts');
const getAllBrandsHandler = require("../../handlers/products/getAllBrandsHandler");
const getAllColorsHandler = require("../../handlers/products/getAllColorsHandler");
const getAllTypesHandler = require("../../handlers/products/getAllTypesHandlers");

router.get("/", getAllOrByNameProducts);
router.get('/name?', getAllOrByNameProducts)
router.get('/filter?', filter)
router.get("/brands", getAllBrandsHandler)
router.get("/colors", getAllColorsHandler)
router.get("/types", getAllTypesHandler)
router.get("/:id", getProductByIdHandler)


router.post("/create", newProductHandler);


module.exports = router;
