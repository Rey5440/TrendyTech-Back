const { Reviews } = require("../../db/db");

const getRevByIdProdController = async (prodIdRev) => {
  try {
    const reviews = await Reviews.findAll({
      where: {
        productId: prodIdRev
      }
    });

    return reviews;
  } catch (error) {
    console.error("Error obteniendo reviews por productId:", error);
    return [];
  }
};

module.exports = getRevByIdProdController;