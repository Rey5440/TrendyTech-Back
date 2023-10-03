require("dotenv").config();
const {MP_ACCESS_TOKEN,FRONTEND_URL} = process.env
const mercadopago = require('mercadopago')
mercadopago.configure({
    access_token: MP_ACCESS_TOKEN,
});

const postMercadoPago =async (productos)=>{
    let preference={
        items:productos,
        back_urls:{
            success: FRONTEND_URL+"paymentstatus",// caso exitoso ruta front (al mismo producto o a mis compras x ejemplo)
            failure: FRONTEND_URL+"paymentstatus",// caso fallido ruta front (un mensaje de error o similar)
            pending: "" // caso pendiente(en efectivo)
        },
        payment_methods: {
            excluded_payment_types: [
                {
                    id: "ticket"
                }
            ],
            installments: 6
            },
        
        auto_return: "approved",
    };
    const response= await mercadopago.preferences.create(preference)
    
    return response.body.id
}
module.exports = postMercadoPago