const { Product } = require('../../db/db.js');
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
    const DB = await Product.findAll();
    if(!DB.length){
        return insertProduct(objProducts)
    };
    return DB
}

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