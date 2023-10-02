const { Favorite } = require("../../db/db");

//  quitar un producto de la lista de favoritos
async function removeFavorites(id) {
  //const { productId, userId } = req.params;

  try {
    // Busca y elimina el producto de la lista de favoritos del usuario
    const deletedFavorite = await Favorite.destroy({
      where: { id },
    });

    return deletedFavorite;
  } catch (error) {
    console.error(error);
    return error;
  }
}

module.exports = removeFavorites;
