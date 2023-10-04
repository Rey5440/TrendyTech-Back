const { Cart } = require("../../db/db.js");
const addQuantityCart= async (userid,productid)=>{  
    // sumar la cantidad de productos a comprar
    const cart = await Cart.findOne({ where: { userId: userid } });

    cart.products.forEach(product => {
        console.log(product.quantity)
        product.id==productid&&product.quantity++;
    });
    await cart.save();
    
    return cart
}

module.exports = addQuantityCart;