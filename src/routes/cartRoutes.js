const { Router } = require("express");
const postCartHandler = require("../handlers/cartHandlers/postCartHandler");
const addItemCartHandler = require("../handlers/cartHandlers/addItemCartHandler");
const deleteItemHandler = require("../handlers/cartHandlers/deleteItemHandler");
const getCartByClientIdHandler = require("../handlers/cartHandlers/getCartByClientIdHandler");

const cartRoutes = Router();

cartRoutes.post("/create", postCartHandler);
// cartRoutes.put("/addItem", addItemCartHandler);  // /:cartID/items  POR BODY
// cartRoutes.put("/delete", deleteItemHandler); // :cartID/items/:itemID POR BODY
// cartRoutes.get("/:cartID", getCartByIdHandler);
// cartRoutes.get("/client/:clientID", getCartByClientIdHandler);

module.exports = cartRoutes;