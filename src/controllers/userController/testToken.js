const { User } = require('../../db/db.js')

const testToken = async (req, res) => {
    const { token } = req.params;
  
    const validToken = await User.findOne({ where: { token } });
  
    if (validToken) {
      res.json({ msg: "Actualiza tu password" });
    } else {
      const error = new Error("Invalid token");
      return res.status(403).json({ msg: error.message });
    }
  };

  module.exports = {
    testToken
  }