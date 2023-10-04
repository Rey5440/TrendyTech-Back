const addFavorites = require("../../controllers/favorites/addFavorites");

async function addFavoritesHandlers(req, res) {
  const { product, userId } = req.body;
  console.log("Este el producto que mando desde el front", product);
  console.log("Este el usuario que mando desde el front", userId);

  try {
    const result = await addFavorites(product, userId);
    if (result.error) {
      return res.status(400).json({ error: result.error });
    }
    res.status(201).json({ result });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

module.exports = addFavoritesHandlers;
