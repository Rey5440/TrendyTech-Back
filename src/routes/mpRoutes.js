require("dotenv").config();
const {MP_ACCESS_TOKEN} = process.env
const {Router}=require('express')
const mercadopago = require('mercadopago')
const mpRoutes = Router()

mercadopago.configure({
    access_token: MP_ACCESS_TOKEN,
});

mpRoutes.post('/create_preference', (req, res) => {
    let preference={
        items:[
            {
                title: req.body.description,
                unit_price: Number(req.body.price),
                quantity: Number(req.body.quantity)
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
			res.json({
				id: response.body.id
			});
        console.log(respose.body)
		}).catch(function (error) {
			console.log(error);
		});
})

module.exports = mpRoutes