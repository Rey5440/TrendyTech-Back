const { User } = require('../../db/db.js')

const newPassword = async (req, res) => {
    const { token } = req.params;
    const { password } = req.body;
  
    const user = await User.findOne({ where: { token } });
  
    if (user) {
      //añadimos nuevo password
      user.password = password;
      //reseteamos token a vacio
      user.token = "";
      //guardamos los cambios
      await user.save();
      res.json({ msg: "Password modificado con Éxito" });
    } else {
      const error = new Error("Tokwn no válido");
      return res.status(403).json({ msg: error.message });
    }
  };

module.exports = {
    newPassword
}