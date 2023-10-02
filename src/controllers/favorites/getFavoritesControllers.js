const { Favorite, Product } = require("../../db/db");
//favoritos de un usuario
async function getFavoritesControllers(userId) {
  try {
    // Busca los productos favoritos del usuario
    const favorites = await Favorite.findAll({
      where: { userId },
      include: [{ model: Product, as: "product" }],
    });

    return favorites;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

module.exports = getFavoritesControllers;
