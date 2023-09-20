const { User } = require('../../db/db.js')
const { generateToken } = require('../../helpers/generateToken.js')
const { emailRegister } = require('../../helpers/email')


const createUser = async (name, email, password) => {

    const existingUser = await User.findOne({ where: { email } });

    if (existingUser) {
        throw new Error('The email is already in use');
    }

    const user = await User.create({
        name,
        email,
        password,
        confirmated: true,
        token: generateToken()
    });

    //Email de confirmación, todovia no utilizado.
    emailRegister({
        email: user.email,
        name: user.name,
        token: user.token,
      });

    //   res.json({
    //     msg: "Usuario creado correctamente, hemos enviado un mail a tu casilla de correo para que confirmes tu cuenta",
    //   });

    return user;
};

module.exports = {
    createUser
};
