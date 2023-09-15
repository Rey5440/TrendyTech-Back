const getAllColors = require("../../controllers/colorsControllers/getAllColors");

  
  const getAllColorsHandler = async (req, res) => {
  
    try {
      const colors = await getAllColors();
      res.status(200).json(colors)
    } catch (error) {
      res.status(400).json( { error: error.message})
    }
  }
  
  module.exports = getAllColorsHandler;