const getAllCartsByuserIdController = require("../../controllers/cartControllers/getAllCartsByuserIdController")

const getAllCartsByuserIdHandler = async (req, res) => {
  const { userId } = req.params;
  try {
    const response = await getAllCartsByuserIdController(userId);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
};

module.exports = getAllCartsByuserIdHandler;