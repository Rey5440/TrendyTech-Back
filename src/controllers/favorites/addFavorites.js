const { Favorite, Product } = require("../../db/db");

const addFavorites = async (product, userId) => {
  console.log(product, userId);
  try {
    // Verifica si el usuario ya tiene una lista de favoritos
    let existingFavorite = await Favorite.findOne({
      where: { userId: userId },
    });

    if (!existingFavorite) {
      // Si no existe, crea una nueva entrada en la tabla de Favoritos
      existingFavorite = await Favorite.create({
        userId,
        favorites: [product],
      });
      return existingFavorite;
    } else {
      // Si ya existe, agrega el producto al array de favoritos
      const { favorites } = existingFavorite;
      favorites.push(product);
      await existingFavorite.save(); // Guarda la actualización en la base de datos
      return existingFavorite;
    }
  } catch (error) {
    console.error(error);
    return { error: "Error al agregar a favoritos" };
  }
};

module.exports = addFavorites;
