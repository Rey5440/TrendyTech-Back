const { Router } = require("express");

const productRoutes = require("./products/productsRoutes.js");
const userRoutes = require("./userRoutes.js");
const mpRoutes = require("./mpRoutes");
const orderRoutes = require("./orderRoutes");
const favoriteRoutes = require("./favoriteRoutes.js");

const router = Router();

router.use("/users", userRoutes);
router.use("/products", productRoutes);
router.use("/checkout", mpRoutes);
router.use("/orders", orderRoutes);
router.use("/favorites", favoriteRoutes);

module.exports = router;
