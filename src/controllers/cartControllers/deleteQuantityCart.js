const {Cart}=require("../../db/db.js");

const deleteQuantityCart= async (userid,productid)=>{
    // restar la cantidad del producto a comprar
    const cart = await Cart.findOne({ where: { userId: userid } });
    cart.products.forEach(product => {
        console.log(product.quantity)
        if (product.id==productid){
            if (product.quantity>1){
            product.quantity--;
            cart.total-=product.price
            }
            console.log(product.quantity)
        }
    })
}

module.exports = deleteQuantityCart;