const postCartController = require("../../controllers/cartControllers/postCartController.js");

const postCartHandler = async (req, res) => {
  const { userId } = req.body;
  try {
    const response = await postCartController(userId);
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = postCartHandler;
