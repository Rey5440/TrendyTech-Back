const { Router } = require("express");

const productRoutes = require("./products/productsRoutes.js");
const userRoutes = require("./userRoutes.js");
const mpRoutes = require("./mpRoutes");
const orderRoutes = require("./orderRoutes");
const cartRoutes = require("./cartRoutes");
const router = Router();

router.use("/users", userRoutes);
router.use("/products", productRoutes);
router.use("/checkout", mpRoutes);
router.use("/orders", orderRoutes);
router.use("/cart", cartRoutes);

module.exports = router;
