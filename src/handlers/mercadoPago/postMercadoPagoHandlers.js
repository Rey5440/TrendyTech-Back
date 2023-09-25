const postMercadoPago = require('../../controllers/mercadoPagoController/postMercadoPago');
const postMercadopagoHandlers =async (req, res) => {
    const { productos } = req.body;
    try {
        const response =await postMercadoPago( productos );
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json( { error: error.message})
    }
}

module.exports = postMercadopagoHandlers