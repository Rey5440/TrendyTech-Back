require("dotenv").config();
const { Sequelize } = require("sequelize");
const { DB_URL, DB_LOCAL_ROBER } = process.env;
const path = require("path");
const fs = require("fs");

const sequelize = new Sequelize(DB_LOCAL_ROBER, {
  host: "localhost",
  dialect: "postgres",
  logging: false,
  native: false,
});

const basename = path.basename(__filename);

const modelDefiners = [];

fs.readdirSync(path.join(__dirname, "../models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "../models", file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { User, TypeProduct, Product, Brand, Color, Sales} = sequelize.models;


// Aca vendrian las relaciones
// Product.hasMany(Reviews);
Product.belongsTo(Brand, {foreignKey: 'brandId'});

Product.belongsTo(Color, {foreignKey: 'colorId'});

Product.belongsTo(TypeProduct, {foreignKey: 'typeId'});

Product.hasMany(Sales, {foreignKey: 'productsId'});

User.hasOne(Sales, {foreignKey: 'userId'});

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize, // para importart la conexión { conn } = require('./db.js');
};

