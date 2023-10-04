const { User } = require("../../db/db.js")
const { generateJWT } = require("../../helpers/generateJWT.js")

const authenticateUser = async ( email, password ) => { 

    const user = await User.findOne({where: {email}})

    if(!user) {
        throw new Error("Usuario inexistente");
    }

    if(!user.confirmated){
        throw new Error("Tu cuenta no esta confirmada")
    }
    
    const isPasswordCorrect = await user.checkPassword(password)

    if (isPasswordCorrect) {
        return {
            id: user.id,
            name: user.name,
            email: user.email,
            token: generateJWT(user.id),
            isDeleted: user.isDeleted,
        };
    } else {
        throw new Error("Password incorrecto");
    }
}

const profile = async (req, res) => {
    // console.log('desde perfil')
    const { user } = req;
  
    res.json(user);
  };

module.exports = {
    authenticateUser,
    profile
}