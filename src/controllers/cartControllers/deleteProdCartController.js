const { Cart, Product } = require("../../db/db.js");

const deleteProdCartController = async (userid, productid) => {
    const foundCart = await Cart.findOne({
        where: { userId: userid }
    });
    const foundProduct = await Product.findOne({
        where: { id: productid }
    })
    if(foundCart){
        foundCart.products.forEach(product => {
            if (product.id === foundProduct.id) {
                const totalRest=product.quantity*product.price
                foundCart.total -= totalRest
            }
        });
        foundCart.products.filter(product => {product.id !== foundProduct.id});
        await foundCart.save()
        return foundCart;
    } else {
        throw new Error("El carrito no existe");
    }
}

module.exports = deleteProdCartController;