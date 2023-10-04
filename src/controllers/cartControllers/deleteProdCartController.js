const { Cart, Product } = require("../../db/db.js");

const deleteProdCartController = async (idUser, idProducto) => {
    const foundCart = await Cart.findOne({
        where: { userId: idUser }
    });
    const foundProduct = await Product.findOne({
        where: { id: idProducto }
    })
    if(foundCart){
        foundCart.products.filter(product => product.id !== foundProduct.id);
        await foundCart.save()
        return foundCart;
    } else {
        throw new Error("El carrito no existe");
    }
}

module.exports = deleteProdCartController;