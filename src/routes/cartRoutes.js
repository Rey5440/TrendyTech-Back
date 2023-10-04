const { Router } = require("express");
const postCartHandler = require("../handlers/cartHandlers/postCartHandler");
const addItemCartHandler = require("../handlers/cartHandlers/addProductCartHandler");
const deleteProductHandler = require("../handlers/cartHandlers/deleteProductHandler");
const addQuantityCartHandler = require("../handlers/cartHandlers/addQuantityCartHandler");
const deleteQuantityCartHandler = require("../handlers/cartHandlers/deleteQuantityCartHandler");
const getCartByClientIdHandler = require("../handlers/cartHandlers/getCartByClientIdHandler");

const cartRoutes = Router();

cartRoutes.post("/create", postCartHandler);
cartRoutes.put("/add/:userid/product", addItemCartHandler);
cartRoutes.put("/delete/:userid/product", deleteProductHandler);
cartRoutes.put("add/:userid/quantity", addQuantityCartHandler);
cartRoutes.put("delete/:userid/quantity", deleteQuantityCartHandler);
cartRoutes.get("/:userid", getCartByClientIdHandler);

module.exports = cartRoutes;