const { User } = require('../../db/db.js')
const {generateToken} = require('../../helpers/generateToken.js')
const {emailRegister, emailForgetPassword} = require('../../helpers/email')

const resetPassword = async (req, res) => {
    const { email } = req.body;
  
    //Comprobar si el usuario existe
    const user = await User.findOne({ where: { email } });
  
    if (!user) {
      const error = new Error("The user does not exist");
      return res.status(404).json({ msg: error.message });
    }
  
    try {
      user.token = generateToken();
      await user.save();
  
      //Enviar el email
      emailForgetPassword({
        email: user.email,
        name: user.name,
        token: user.token,
      });
  
      res.json({
        msg: "Revisa tu email y entra al enlace para resetear tu contraseña",
      });
    } catch (error) {
      console.log(error);
    }
  };

  module.exports = {
    resetPassword
  }