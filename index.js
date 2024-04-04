const server = require("./src/app.js");
const { conn } = require("./src/db/db.js");
const {
  getDBinfo,
} = require("./src/controllers/productsControllers/getProductsController.js");

const PORT = process.env.PORT;

conn.sync({ force: false }).then(() => {
  server.listen(PORT, async () => {
    await getDBinfo();
    console.log(`Server listening on ${PORT}`);
  });
});
