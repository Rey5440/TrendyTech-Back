const { Cart, Product } = require("../../db/db.js");

const addItemCartController = async (idUser, idProducto) => {
    const foundCart = await Cart.findOne({
        where: { userId: idUser }
    })
    const foundProduct = await Product.findOne({
        where: { id: idProducto }
    })

    if (foundCart) {
        foundCart.products.push(foundProduct)
        await foundCart.save()
        return foundCart
    } else {
        const newCart = await Cart.create({
            userId: idUser,
            products: [foundProduct]
        })
        return newCart
    }
}

module.exports = addItemCartController;