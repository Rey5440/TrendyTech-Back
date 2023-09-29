const { Product } = require("../../db/db")

const deleteProductController = async (productId) => {

    try {
        const product = await Product.findOne({ where: { id: productId } });
        if (!product) {
            throw new Error("El producto no fue encontrado");
        }
        product.isDeleted = !product.isDeleted;  // Cambia el valor de isDeleted al opuesto
        await product.save();
        
        return product;
    } catch (error) {
        throw new Error(error.message);
    }
};

module.exports = deleteProductController;