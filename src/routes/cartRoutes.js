const { Router } = require("express");
const postCartHandler = require("../handlers/cartHandlers/postCartHandler");
const addItemCartHandler = require("../handlers/cartHandlers/addItemCartHandler");
const deleteItemHandler = require("../handlers/cartHandlers/deleteItemHandler");
const getCartByClientIdHandler = require("../handlers/cartHandlers/getCartByClientIdHandler");

const cartRoutes = Router();

cartRoutes.post("/create", postCartHandler);
cartRoutes.put("/addItem", addItemCartHandler);
cartRoutes.put("/delete", deleteItemHandler);
cartRoutes.get("/:cartID", getCartByIdHandler);
cartRoutes.get("/client/:clientID", getCartByClientIdHandler);

module.exports = cartRoutes;