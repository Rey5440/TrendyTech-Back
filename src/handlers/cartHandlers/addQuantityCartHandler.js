

const addQuantityCartHandler=async(req,res)=>{
    const { userid } = req.body;
    try {
        const product = await addQuantityCart(iduser);
        res.status(200).json(product)
    } catch (error) {
        res.status(400).json( { error: error.message })
    }
}