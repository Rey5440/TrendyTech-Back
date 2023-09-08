const createProduct = require('../../controllers/productsControllers/createProducts');

const newProductHandler = async (req, res) => {
    const {name, price, description, stock, images, brand, color, type} = req.body;
    try {
        const newProduct = await createProduct(name, price, description, stock, images, brand, color, type);
        res.status(200).json(newProduct);
    } catch (error){
        res.status(404).json({error: error.message});
    };
};

module.exports = newProductHandler;