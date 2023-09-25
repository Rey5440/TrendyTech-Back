require("dotenv").config();
const {MP_ACCESS_TOKEN} = process.env
const mercadopago = require('mercadopago')

mercadopago.configure({
    access_token: MP_ACCESS_TOKEN,
});

const postMercadoPago =async (productos)=>{
    console.log(productos)
    let preference={
        items:productos,
        back_urls:{
            success: "http://localhost:5173/paymentstatus",// caso exitoso ruta front (al mismo producto o a mis compras x ejemplo)
            failure: "http://localhost:5173/paymentstatus",// caso fallido ruta front (un mensaje de error o similar)
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