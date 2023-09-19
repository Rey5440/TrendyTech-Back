const { filterProducts } = require('../../controllers/productsControllers/filterProducts');

const productsHandler = async (req, res) => {
  try {
    const { brand, minPrice, maxPrice, color, type } = req.query;
    const products = await filterProducts({ brand, minPrice, maxPrice, color, type });
    
    if (products.length > 0) {
      return res.status(200).json(products);
    } else {
      return res.json('No hay productos disponibles con esos requisitos, prueba ampliar tus parametros de búsqueda');
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Error al obtener los productos.' });
  }
};

module.exports = {
  productsHandler,
};




  