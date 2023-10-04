const deleteQuantityCart= require("../../controllers/cartControllers/deleteQuantityCart")

const deleteQuantityCartHandler=async(req,res)=>{
    const {userid}=req.params
    const {productid}=req.body
    try{
        const product=await deleteQuantityCart(userid,productid);
        res.status(200).json(product)
    }
    catch(error){
        res.status(400).json({error:error.message})
    }
}


module.exports = deleteQuantityCartHandler;
