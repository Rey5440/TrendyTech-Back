const { Router } = require("express");
const postCartHandler = require("../handlers/cartHandlers/postCartHandler");
const addItemCartHandler = require("../handlers/cartHandlers/addItemCartHandler");
const deleteProductHandler = require("../handlers/cartHandlers/deleteProductHandler");
const getCartByClientIdHandler = require("../handlers/cartHandlers/getCartByClientIdHandler");

const cartRoutes = Router();

cartRoutes.post("/create", postCartHandler);
cartRoutes.put("/add/:iduser/product", addItemCartHandler);
cartRoutes.put("/delete/:iduser/product", deleteProductHandler);
cartRoutes.get("/carts/:cartID", getCartByIdHandler);
cartRoutes.get("/carts/:clientID", getCartByClientIdHandler);

module.exports = cartRoutes;