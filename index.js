const server = require("./src/app.js");
const { conn } = require("./src/db/db.js");

conn.sync({ force: false}).then(() => {
  server.listen(3004, () => {
    console.log("Server listening on 3004");
  });
});
