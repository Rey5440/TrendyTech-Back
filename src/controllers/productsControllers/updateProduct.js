const { Product } = require("../../db/db");
const createBrand = require("../brandsControllers/createBrand");
const createColor = require("../colorsControllers/createColor");
const createType = require("../typesControllers/createType");
const {
  validatePrice,
  validateDescription,
  validateStock,
  validateName,
  validateBrand,
  validateColor,
  validateType,
} = require("../../helpers/validationUpdateHelpers");

const updateProduct = async (updateData) => {
  const { id, name, price, description, stock, images, brand, color, type } =
    updateData;

  const validationErrors = {};

  // Validar el precio
  const priceErrors = validatePrice(price);
  if (Object.keys(priceErrors).length > 0) {
    validationErrors.price = priceErrors;
  }

  // Validar la descripción
  const descriptionErrors = validateDescription(description);
  if (Object.keys(descriptionErrors).length > 0) {
    validationErrors.description = descriptionErrors;
  }

  // Validar el stock
  const stockErrors = validateStock(stock);
  if (Object.keys(stockErrors).length > 0) {
    validationErrors.stock = stockErrors;
  }

  //Validar el name
  const nameErrors = validateName(name);
  if (Object.keys(nameErrors).length > 0) {
    validationErrors.name = nameErrors;
  }

  // Validar el brand
  const brandErrors = validateBrand(brand);
  if (Object.keys(brandErrors).length > 0) {
    validationErrors.brand = brandErrors;
  }

  // Validar el color
  const colorErrors = validateColor(color);
  if (Object.keys(colorErrors).length > 0) {
    validationErrors.color = colorErrors;
  }

  // Validar el tipo
  const typeErrors = validateType(type);
  if (Object.keys(typeErrors).length > 0) {
    validationErrors.type = typeErrors;
  }

  if (Object.keys(validationErrors).length > 0) {
    return { validationErrors };
  }

  const brandResult = await createBrand(brand);

  const colorResult = await createColor(color);

  const typeResult = await createType(type);

  const actualización = await Product.update(
    {
      name,
      price,
      description,
      stock,
      images,
      brandId: brandResult.id,
      colorId: colorResult.id,
      typeId: typeResult.id,
    },
    { where: { id } }
  );

  return { message: "Producto actualizado con éxito", actualización };
};

module.exports = updateProduct;
