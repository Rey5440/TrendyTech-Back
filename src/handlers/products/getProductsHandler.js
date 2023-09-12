const {
  searchProductsByName,
  getDBinfo,
  getProductById
} = require("../../controllers/productsControllers/getProductsController");

const getAllOrByNameProducts = async (req, res) => {
  const { name } = req.query;
  const results = name ? await searchProductsByName(name) : await getDBinfo();
  
  if (results === `Cannot find product: ${name}`)
    return res
      .status(404)
      .json({ error: `Cannot find product: ${name}` });
  res.status(200).json(results);
};

const getProductByIdHandler = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await getProductById(id);
    res.status(200).json(product)
  } catch (error) {
    res.status(400).json( { error: error.message})
  }
}

module.exports = { getAllOrByNameProducts, getProductByIdHandler };
