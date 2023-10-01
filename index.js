const server = require("./src/app.js");
const { conn } = require("./src/db/db.js");
const {
  getDBinfo,
} = require("./src/controllers/productsControllers/getProductsController.js");

conn.sync({ force: false }).then(() => {
  server.listen(3004, async () => {
    await getDBinfo();
    console.log("Server listening on 3004");
  });
});
