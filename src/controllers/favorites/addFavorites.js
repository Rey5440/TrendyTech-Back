const { Favorite } = require("../../db/db");

const addFavorites = async (product, userId) => {
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
      console.log("Esto retorno si no existe", existingFavorite.dataValues.favorites);
      return existingFavorite.dataValues.favorites;
    } else {
      // Si ya existe, obtén la lista de favoritos actualF
      const { favorites } = existingFavorite;

      const isProductInFavorites = favorites.some((fav) => fav.id === product.id);

      if (!isProductInFavorites) {

        const updatedFavorites = [...favorites, product];
        await existingFavorite.update({ favorites: updatedFavorites });
        console.log("Esto es lo que devuelve si ya existe", existingFavorite.dataValues.favorites);
      }

      return existingFavorite.dataValues.favorites;
    }
  } catch (error) {
    console.error(error);
    return { error: error.message };
  }
};

module.exports = addFavorites;
