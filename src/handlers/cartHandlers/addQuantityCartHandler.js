const addQuantityCart=require("../../controllers/cartControllers/addQuantityCart")

const addQuantityCartHandler=async(req,res)=>{
    const { userid } = req.params;
    const { productid } = req.body
    try {
        const product = await addQuantityCart(userid, productid);
        res.status(200).json(product)
    } catch (error) {
        res.status(400).json( { error: error.message })
    }
}

module.exports = addQuantityCartHandler;