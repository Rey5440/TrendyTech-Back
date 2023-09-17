const server = require("./src/app.js");
const { conn } = require("./src/db/db.js");

conn.sync({ force: true }).then(() => {
  server.listen(3004, () => {
    
    console.log("Server listening on 3004");
  });
});
