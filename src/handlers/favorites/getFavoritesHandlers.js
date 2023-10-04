const getFavoritesControllers = require("../../controllers/favorites/getFavoritesControllers");

// Manejador para obtener la lista de favoritos de un usuario
async function getFavoritesHandlers(req, res) {
  const { id } = req.params;

  try {
    // Llama a la función 'getFavorites' del controlador
    const userFavorites = await getFavoritesControllers(id);

   if(userFavorites.error){
    return res.status(400).json({message: userFavorites.error})
   }
   
    return res.status(200).json({ userFavorites });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
}

module.exports = getFavoritesHandlers;
