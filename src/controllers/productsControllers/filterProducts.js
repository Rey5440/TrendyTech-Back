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


/*-----------------------------------------------------------------
  Filtrado por marca: http://localhost:3004/products/filter?brand=11 
-----------------------------------------------------------------*/

/* 
  Filtrado por color: http://localhost:3004/products/filter?color=11 
*/

/* -----------------------------------------------------------------
  Filtrado por color: http://localhost:3004/products/filter?color=11 
-----------------------------------------------------------------*/


/*-----------------------------------------------------------------
  Filtrado por marca y color: http://localhost:3004/products/filter?brand=11&color=16 
-----------------------------------------------------------------*/

/* -----------------------------------------------------------------
  Filtrado por marca, color y precio: http://localhost:3004/products/filter?brand=11&color=16&minPrice=8500&maxPrice=9000 
-----------------------------------------------------------------*/

/*-----------------------------------------------------------------
  Filtrado por precio: http://localhost:3004/products/filter?minPrice=8500&maxPrice=90000
-----------------------------------------------------------------*/


// const filterProducts = async (req, res) => {
//   try {
//     const { brand, minPrice, maxPrice, color, type } = req.query;
//     const requiredFiltering = {};

//     if (brand) requiredFiltering.brandId = brand;
//     if (color) requiredFiltering.colorId = color;
//     if (type) requiredFiltering.typeId = type;
    
//     if (minPrice && maxPrice) {
//       requiredFiltering.price = {
//         [Op.between]: [parseInt(minPrice), parseInt(maxPrice)],
//       };
//     }

//     const products = await Product.findAll({
//       where: requiredFiltering,
//       include: [
//         {
//           model: Brand,
//           attributes: ['name'],
//         },
//         {
//           model: Color,
//           attributes: ['name'],
//         },
//         {
//           model: TypeProduct,
//           attributes: ['name'],
//         }
//       ],
//       order: [['price', 'ASC']],
//     });
    
//     if (products.length > 0) {
//       return res.status(200).json(products);
//     } else {
//       return res.json('No hay productos disponibles con esos requisitos, prueba ampliar tus parametros de busqueda');
//     }
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({ error: 'Error al obtener los productos.' });
//   }
// };

// module.exports = {
//   filterProducts,
// };


