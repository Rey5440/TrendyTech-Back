const { Cart } = require("../../db/db.js");
const addQuantityCart= async (userid,productid)=>{  
    // sumar la cantidad de productos a comprar
    const cart = await Cart.findOne({ where: { userId: userid } });

    cart.products.forEach(product => {
        console.log(product.quantity)
        product.id==productid&&product.quantity++;
        cart.total+=product.price;
    });
    await cart.save();
    console.log(cart)
    return cart
}

module.exports = addQuantityCart;