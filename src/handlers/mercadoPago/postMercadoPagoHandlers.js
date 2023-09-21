const postMercadoPago = require('./postMercadoPago');
const postMercadopagoHandlers =async (req, res) => {
    const { name, price, quantity } = req.body;
    try {
        const response =await postMercadoPago(name, price, quantity);
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json( { error: error.message})
    }
}