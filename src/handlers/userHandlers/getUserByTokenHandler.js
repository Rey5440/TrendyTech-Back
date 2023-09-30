const { User } = require("../../db/db.js");

const getUserByToken = async (req, res) => {
      const { token } = req.params;
  try {
    const userToken = await User.findOne({ where: { token } });

    if (!userToken) {
      return res
        .status(404)
        .json({ message: `User not found with token: ${token}` });
        }
        const user = userToken.dataValues;
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getUserByToken,
};
