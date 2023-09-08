const {
  searchProductsByName,
  getDBinfo,
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

module.exports = getAllOrByNameProducts;
