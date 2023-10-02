const removeFavorites = require("../../controllers/favorites/removeFavorites");
// Controlador para quitar un producto de la lista de favoritos
async function removeFavoritesHandlers(req, res) {
  //const { productId, userId } = req.params;
  const { id } = req.params;
  //const userId = req.body.userId;
  try {
    // Llamamos a la función `removeFavorites` para quitar el producto de la lista de favoritos
    const deletedFavorite = await removeFavorites(id);

    // Si no se encontró el favorito para eliminar, puedes manejarlo aquí
    if (deletedFavorite === 0) {
      return res
        .status(404)
        .json({ message: "Producto no encontrado en favoritos" });
    }

    // Devolvemos una respuesta de éxito
    return res.status(200).json({ message: "Producto eliminado de favoritos" });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ error: "Error al eliminar el producto de favoritos" });
  }
}

module.exports = removeFavoritesHandlers;
