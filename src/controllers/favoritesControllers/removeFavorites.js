const { Favorite } = require("../../db/db");

const removeFavorites = async (product, userId) => {
  console.log("Este es el producto que me llega", product);
  console.log("Este es el id de usuario que me llega", userId);

  try {
    let deletedFavorite = await Favorite.findOne({
      where: { userId: userId },
    });

    if (!deletedFavorite) {
      return { error: "El usuario no tiene lista de favoritos" };
    }

    let { favorites } = deletedFavorite;

    favorites = favorites.filter((item) => item.id !== product.id)

    await deletedFavorite.update({ favorites });


    console.log("Esto devuelvo si todo salió bien", favorites);

    return favorites;
  } catch (error) {
    console.error(error);
    return error;
  }
};

module.exports = removeFavorites;