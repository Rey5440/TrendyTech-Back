const { Product } = require("../../db/db.js");
const createBrand = require('../brandsControllers/createBrand');
const createColor = require('../colorsControllers/createColor');
const createType = require('../typesControllers/createType');

const createProduct = async (name, price, description, stock, images, brand, color, type) => {
    const newBrand = await createBrand(brand);
    const newColor = await createColor(color);
    const newType = await createType(type);

    const newProduct = await Product.create({
        name,
        price,
        description,
        stock,
        images,
        brandId: newBrand.id,
        colorId: newColor.id,
        typeId: newType.id,
        isDeleted: false,
    })
    return newProduct.dataValues;
};

module.exports = createProduct;