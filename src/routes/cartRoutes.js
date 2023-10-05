const { Router } = require("express");
const postCartHandler = require("../handlers/cartHandlers/postCartHandler");
const addItemCartHandler = require("../handlers/cartHandlers/addProductCartHandler");
const deleteProductHandler = require("../handlers/cartHandlers/deleteProductHandler");
const addQuantityCartHandler = require("../handlers/cartHandlers/addQuantityCartHandler");
const discountQuantityCartHandler = require("../handlers/cartHandlers/discountQuantityCartHandler");
const getCartOpenByIdHandler = require("../handlers/cartHandlers/getCartOpenByIdHandler");
const closeCartHandler = require("../handlers/cartHandlers/closeCartHandler");
const getAllCartsByuserIdHandler = require("../handlers/cartHandlers/getAllCartByUserIdHandler");
const cartRoutes = Router();

cartRoutes.post("/create", postCartHandler);
cartRoutes.put("/close/:userId", closeCartHandler);

cartRoutes.put("/addItem", addItemCartHandler); // controlar si no existe el id que pasan...!
cartRoutes.put("/delete", deleteProductHandler);

cartRoutes.put("/increaseQuantity", addQuantityCartHandler);
cartRoutes.put("/discountQuantity", discountQuantityCartHandler);

cartRoutes.get("/open/:userId", getCartOpenByIdHandler);
cartRoutes.get("/getAllCarts/:userId", getAllCartsByuserIdHandler);
module.exports = cartRoutes;

// rutas para: abrir-cerrar / agregar-borrar prod / sumar-restar cantidad / traer el cart abierto o los cerrados.
