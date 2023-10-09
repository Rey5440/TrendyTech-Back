const { Router } = require("express");
const addFavoritesHandlers = require("../handlers/favorites/addFavoritesHandlers")
const removeFavoritesHandlers = require("../handlers/favorites/removeFavoritesHandlers")
const getFavoritesHandlers = require("../handlers/favorites/getFavoritesHandlers")

const favoriteRoutes = Router();

// Ruta para agregar favoritos
favoriteRoutes.post("/", addFavoritesHandlers);

// Ruta para quitar producto  favoritos
favoriteRoutes.post("/delete", removeFavoritesHandlers);

// Ruta para obtener la lista de favoritos de un usuario
favoriteRoutes.get("/:id", getFavoritesHandlers);


module.exports = favoriteRoutes;
