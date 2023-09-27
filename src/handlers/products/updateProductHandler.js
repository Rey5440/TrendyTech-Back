const updateProduct = require("../../controllers/productsControllers/updateProduct")

const updateProductHandler = async (req, res) => {
  const updatedData = req.body;
  console.log(updatedData);

  try {
    const result = await updateProduct(updatedData);
    console.log(result);

    if (result.validationErrors) {

      res.status(400).json(result.validationErrors);
    } else {
      // Si la actualización se realiza con éxito, devuelve un mensaje de éxito
      res.status(200).json({ message: result.message });
    }
  } catch (error) {
    if (error.message === "Producto no encontrado") {
      res.status(404).json({ error: "Producto no encontrado" });
    } else {
      console.log(error);
      res.status(500).json({ error: "Error al actualizar el producto" });
    }
  }
};

module.exports = updateProductHandler