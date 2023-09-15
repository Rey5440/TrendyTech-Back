const { Router } = require("express");
const router = Router();

const newProductHandler = require("../../handlers/products/newProductsHandler");
const {getAllOrByNameProducts, getProductByIdHandler} = require('../../handlers/products/getProductsHandler');

const {filter} = require('../../controllers/productsControllers/filterProducts')



router.get("/", getAllOrByNameProducts);
router.get('/name?', getAllOrByNameProducts)
router.get("/:id", getProductByIdHandler)

router.get('/filter?', filter)


router.post("/create", newProductHandler);


module.exports = router;
