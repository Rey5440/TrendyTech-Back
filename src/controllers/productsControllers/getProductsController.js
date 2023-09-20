const { Product, Color, Brand, TypeProduct } = require('../../db/db.js');
const { Op } = require('sequelize');
const objProducts = require('../../helpers/objProducts');
const insertProduct = require('../../helpers/insertProducts.js');

const searchProductsByName = async (name) => {
    const productByName = await Product.findAll({where: {name: {[Op.iLike]: `%${name}%`}}});
    if(!productByName.length){
        return `Cannot find product: ${name}`
    }
    return productByName;
};

const getDBinfo = async () => {
    const DB = await Product.findAll({
      include: [
        {
          model: Brand,
          as: 'brand',
          attributes: ['name'], 
        },
        {
          model: Color,
          as: 'color',
          attributes: ['name'], 
        },
        {
          model: TypeProduct,
          as: 'typeProduct',
          attributes: ['name'], 
        },
      ],
    });
  
    if (!DB.length) {
      return insertProduct(objProducts);
    }
    
    // Mapear los resultados para obtener solo los datos relevantes
    const result = DB.map(product => ({
      id: product.id,
      name: product.name,
      price: product.price,
      description: product.description,
      stock: product.stock,
      images: product.images,
      isDeleted: product.isDeleted,
      brand: product.brand.name, 
      color: product.color.name, 
      type: product.typeProduct.name,   
    }));
  
    return result;
  };
  

//   const filterProductsByAttributes = async ({ brand, color, typeProduct }) => {
//     try {
//       const allProducts = await getDBinfo(); // Obtiene todos los productos con sus atributos
  
//       // Filtra los productos según los atributos proporcionados
//       const filteredProducts = allProducts.filter(product => {
//         if (
//           (!brand || product.brand === brand) &&
//           (!color || product.color === color) &&
//           (!typeProduct || product.typeProduct === typeProduct)
//         ) {
//           return true;
//         }
//         return false;
//       });
  
//       return filteredProducts;
//     } catch (error) {
//       console.error(error);
//       throw new Error('Error al filtrar productos');
//     }
//   };
  
//   // Ejemplo de uso:
//   const filteredProducts = await filterProductsByAttributes({
//     brand: 'Nombre de la marca',
//     color: 'Nombre del color',
//     typeProduct: 'Nombre del tipo de producto',
//   });
  
//   console.log(filteredProducts);
  

// const getDBinfo = async () => {
//     const DB = await Product.findAll();
//     if(!DB.length){
//         return insertProduct(objProducts)
//     };
//     return DB
// }

const getProductById = async (id) => {
    try {
        const productId = await Product.findOne({ where: { id }});
        
        if (!productId) {
            throw new Error(`No product was found with the ID: ${id}`);
        }

        return productId
    } catch (error) {
        throw new Error(error.message)
    }
}

module.exports = { searchProductsByName, getDBinfo, getProductById }