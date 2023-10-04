const validatePrice = (price) => {
    const errors = {};

    if (!price) errors.price = "Debe insertar un precio";
    if (typeof price !== "number") errors.price = "El precio debe ser un número";

    return errors;
}

const validateDescription = (description) => {
    const errors = {};

    if (!description) errors.description = "Debe escribir una descripción del producto";
    

    return errors;
}

const validateStock = (stock) => {
    const errors = {};

    
    if (typeof stock !== "number") errors.stock = "El stock debe ser un número";
    if (stock < 0) errors.stock = "El valor no puede ser un número negativo";
    

    return errors;
}

const validateName = (name) => {
    const errors = {};

    if (!name) errors.name = "Debe escribir el nombre del producto";

    return errors;
}

const validateBrand = (brand) => {
    const errors = {};

    if (!brand) errors.brand = "Debe escribir el nombre de la marca";

    return errors;
}

const validateColor = (color) => {
    const errors = {};

    if (!color) errors.color = "Debe escribir el color del producto";

    return errors;
}

const validateType = (type) => {
    const errors = {};

    if (!type) errors.type = "Debe escribir el tipo del producto";
    

    return errors;
}

module.exports = {
    validatePrice,
    validateDescription,
    validateStock,
    validateName,
    validateBrand,
    validateColor,
    validateType
}
