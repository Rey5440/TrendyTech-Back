const createProduct = require('../controllers/productsControllers/createProducts');

const insertProduct = async (products) => {
    const productsList = await products.map(async({name, price, description, stock, discount, images, brand, color, type}) => {
        await createProduct(name, price, description, stock, discount, images, brand, color, type)
        return { name, price, description, stock, discount, images, brand, color, type }
    })
    return productsList
}

module.exports = insertProduct;