const { Router } = require("express");
const postCartHandler = require("../handlers/cartHandlers/postCartHandler");
const addItemCartHandler = require("../handlers/cartHandlers/addItemCartHandler");
const deleteItemHandler = require("../handlers/cartHandlers/deleteItemHandler");
const getCartByClientIdHandler = require("../handlers/cartHandlers/getCartByClientIdHandler");

const cartRoutes = Router();

cartRoutes.post("/create", postCartHandler);
cartRoutes.post("/addItem/:cartID/items", addItemCartHandler);
cartRoutes.delete("/delete/:cartID/items/:itemID", deleteItemHandler);
cartRoutes.get("/carts/:cartID", getCartByIdHandler);
cartRoutes.get("/carts/:clientID", getCartByClientIdHandler);

module.exports = cartRoutes;