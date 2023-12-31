const { User, Order } = require("../../db/db.js");

const getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const userId = await User.findByPk(id, {include: Order});

    if (!userId) {
      return res.status(404).json({ message: `User not found with id: ${id}` });
    }

    return res.status(200).json(userId);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getUserById,
};
