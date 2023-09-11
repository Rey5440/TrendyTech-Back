// handlers/products/filterProductsHandler.js
const { Op } = require('sequelize');
const { Product, Brand, Color, TypeProduct } = require('../../db/db');

const filterProducts = async ({ brand, minPrice, maxPrice, color, type }) => {
  const requiredFiltering = {};

  if (brand) requiredFiltering.brandId = brand;
  if (color) requiredFiltering.colorId = color;
  if (type) requiredFiltering.typeId = type;

  if (minPrice && maxPrice) {
    requiredFiltering.price = {
      [Op.between]: [parseInt(minPrice), parseInt(maxPrice)],
    };
  }

  const products = await Product.findAll({
    where: requiredFiltering,
    include: [
      {
        model: Brand,
        attributes: ['name'],
      },
      {
        model: Color,
        attributes: ['name'],
      },
      {
        model: TypeProduct,
        attributes: ['name'],
      },
    ],
    order: [['price', 'ASC']],
  });

  return products;
};

module.exports = {
  filterProducts,
};


  