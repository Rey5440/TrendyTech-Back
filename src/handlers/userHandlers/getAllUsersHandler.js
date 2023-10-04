const { User, Order } = require("../../db/db.js");

// Ruta para traer todos los usuarios

const getAllUsers = async (req, res) => {
  try {
    const allUsers = await User.findAll({ include: Order });

    if (allUsers.length === 0) {
      res.status(400).json({ message: "There are no active users" });
    } else {
      return res.json(allUsers);
    }
  } catch (error) {
    console.error(error);
    return res.status(400).json({ message: "Error getting users" });
  }
};

module.exports = {
  getAllUsers,
};
