const removeFavorites = require("../../controllers/favoritesControllers/removeFavorites")

const removeFavoritesHandlers = async (req, res) => {
    const { product, userId } = req.body;

    try {
        const result = await removeFavorites(product, userId);

        if (result.error) {
            return res.status(404).json({ message: result.error });
        }

        res.status(200).json({ result });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: error.message });
    }
}

module.exports = removeFavoritesHandlers;