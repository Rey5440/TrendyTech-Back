const { Cart, Product } = require("../../db/db.js");

const addProdCartController = async (userid, productid) => {
    const foundCart = await Cart.findOne({
        where: { userId: userid }
    })
    const foundProduct = await Product.findOne({
        where: { id: productid }
    })

    if (foundCart) {
        foundProduct.quantity = 1
        const productExists = foundCart.products.some((product) => product.id === foundProduct.id);
        if(!productExists){ 
            foundCart.products.push(foundProduct)
            foundCart.total += foundProduct.price
        }
        await foundCart.save()
        return foundCart
    } 

}

module.exports = addProdCartController;