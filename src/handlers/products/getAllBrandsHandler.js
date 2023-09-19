const getAllBrands = require("../../controllers/brandsControllers/getAllBrands");

  
  const getAllBrandsHandler = async (req, res) => {
  
    try {
      const brands = await getAllBrands();
      res.status(200).json(brands)
    } catch (error) {
      res.status(400).json( { error: 'hola calenius'})
    }
  }
  
  module.exports = getAllBrandsHandler;