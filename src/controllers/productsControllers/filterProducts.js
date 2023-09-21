const { Op } = require('sequelize');
const { Product, Brand, Color, TypeProduct } = require('../../db/db');


// const filterProducts = async (req, res) => {

//   //Desestruturamos estos valores
//   const { brand, color, minPrice, maxPrice } = req.query;

//   //Crea este objeto vacio que se utilizara para construir las condiciones de filtrado para la consulta a la base de datos
//   let whereCondition = {};

//   //Si brandname esta en los parámetros de de consulta agrega la condicion a wherecondition para filtrar por marca
//   if (brand) {
//     whereCondition = { ...whereCondition, productbrand: brand };
//   }

//   if (color) {
//     whereCondition = { ...whereCondition, productbrand: brand };
//   }

//   //Verifica si minPrice y maxPrice estan en los parametros de busqueda
//   if (minPrice && maxPrice) {
//     whereCondition = {
//       //agrega una condición al objeto whereCondition para filtrar por el rango de precios del producto utilizando el operador Op.between proporcionado por Sequelize
//       ...whereCondition,
//       price: {
//         [Op.between]: [parseInt(minPrice), parseInt(maxPrice)],
//       },
//     };
//   }

//   try {
//     const products = await Product.findAll({ where: whereCondition });

//     if (products.length > 0) {
//       return res.status(200).json(products);
//     } else {
//       return res.json([]);
//     }
//   } catch (error) {
//     return res.status(400).json({ error: 'Error al obtener los productos.' });
//   }
// };

// const filterProducts = async ({ brand, minPrice, maxPrice, color, type }) => {
//   const requiredFiltering = {};

//   if (brand) requiredFiltering.brandId = brand;
//   if (color) requiredFiltering.colorId = color;
//   if (type) requiredFiltering.typeId = type;

//   if (minPrice && maxPrice) {
//     requiredFiltering.price = {
//       [Op.between]: [parseInt(minPrice), parseInt(maxPrice)],
//     };
//   }

//   const products = await Product.findAll({
//     where: requiredFiltering,
//     include: [
//       {
//         model: Brand,
//         attributes: ['name'],
//       },
//       {
//         model: Color,
//         attributes: ['name'],
//       },
//       {
//         model: TypeProduct,
//         attributes: ['name'],
//       },
//     ],
//     order: [['price', 'ASC']],
//   });

//   return products;
// };

const filterProducts = async ({ brand, minPrice, maxPrice, color, type }) => {
  const requiredFiltering = {};

  if (brand) {
    const brandObj = await Brand.findOne({ where: { name: brand } });
    if (brandObj) {
      requiredFiltering.brandId = brandObj.id;
    }
  }

  if (color) {
    const colorObj = await Color.findOne({ where: { name: color } });
    if (colorObj) {
      requiredFiltering.colorId = colorObj.id;
    }
  }

  if (type) {
    const typeObj = await TypeProduct.findOne({ where: { name: type } });
    if (typeObj) {
      requiredFiltering.typeId = typeObj.id;
    }
  }

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

// module.exports = {
//   filterProducts,
// };

/*
  http://localhost:3004/products/filter?color=6&minPrice=8500&maxPrice=90000
*/

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




// const filterProducts = async ({ brand, minPrice, maxPrice, color, type }) => {
//   const requiredFiltering = {};

//   if (brand) {
//     const brandObj = await Brand.findOne({ where: { name: brand } });
//     if (brandObj) {
//       requiredFiltering.brandId = brandObj.id;
//     }
//   }

//   if (color) {
//     const colorObj = await Color.findOne({ where: { name: color } });
//     if (colorObj) {
//       requiredFiltering.colorId = colorObj.id;
//     }
//   }

//   if (type) {
//     const typeObj = await TypeProduct.findOne({ where: { name: type } });
//     if (typeObj) {
//       requiredFiltering.typeId = typeObj.id;
//     }
//   }

//   if (minPrice && maxPrice) {
//     requiredFiltering.price = {
//       [Op.between]: [parseInt(minPrice), parseInt(maxPrice)],
//     };
//   }

//   const products = await Product.findAll({
//     where: requiredFiltering,
//     include: [
//       {
//         model: Brand,
//         attributes: ['name'],
//       },
//       {
//         model: Color,
//         attributes: ['name'],
//       },
//       {
//         model: TypeProduct,
//         attributes: ['name'],
//       },
//     ],
//     order: [['price', 'ASC']],
//   });

//   return products;
// };

// module.exports = {
//   filterProducts,
// };






// const filterProducts = async ({ brand, minPrice, maxPrice, color, type }) => {
//   const requiredFiltering = {};

//   if (brand) {
//     const brandObjs = await Brand.findAll({ where: { name: brand } });
//     if (brandObjs.length > 0) {
//       requiredFiltering.brandId = brandObjs.map((brandObj) => brandObj.id);
//     }
//   }

//   if (color) {
//     const colorObjs = await Color.findAll({ where: { name: color } });
//     if (colorObjs.length > 0) {
//       requiredFiltering.colorId = colorObjs.map((colorObj) => colorObj.id);
//     }
//   }

//   if (type) {
//     const typeObjs = await TypeProduct.findAll({ where: { name: type } });
//     if (typeObjs.length > 0) {
//       requiredFiltering.typeId = typeObjs.map((typeObj) => typeObj.id);
//     }
//   }

//   if (minPrice && maxPrice) {
//     requiredFiltering.price = {
//       [Op.between]: [parseInt(minPrice), parseInt(maxPrice)],
//     };
//   }

//   const products = await Product.findAll({
//     where: requiredFiltering,
//     include: [
//       {
//         model: Brand,
//         attributes: ['name'],
//       },
//       {
//         model: Color,
//         attributes: ['name'],
//       },
//       {
//         model: TypeProduct,
//         attributes: ['name'],
//       },
//     ],
//     order: [['price', 'ASC']],
//   });

//   return products;
// };

// module.exports = {
//   filterProducts,
// };