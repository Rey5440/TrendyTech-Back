require("dotenv").config();
const {MP_ACCESS_TOKEN} = process.env
const mercadopago = require('mercadopago')

mercadopago.configure({
    access_token: MP_ACCESS_TOKEN,
});

const postMercadoPago =async (name, price, quantity)=>{
    let preference={
        items:[
            {
                title: name,
                unit_price: Number(price),
                quantity: Number(quantity)
            }
        ],
        back_urls:{
            success: "http://localhost:5173/",// caso exitoso ruta front (al mismo producto o a mis compras x ejemplo)
            failure: "http://localhost:5173/",// caso fallido ruta front (un mensaje de error o similar)
            pending: "" // caso pendiente(en efectivo)
        },
        auto_return: "approved",
    };
    mercadopago.preferences.create(preference)
		.then(function (response) { 
            console.log(response)
			return response.body.id
		}).catch(function (error) {
			return error;
		});
}
module.exports = postMercadoPago