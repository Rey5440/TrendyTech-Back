const { User } = require("../../db/db.js")
const { generateJWT } = require("../../helpers/generateJWT.js")

const authenticateUser = async ( email, password ) => { 

    const user = await User.findOne({where: {email}})

    if(!user) {
        throw new Error("The user does not exist");
    }

    if(!user.confirmated){
        throw new Error("Your count is not confirmed")
    }
    console.log("Prueba", password, parseInt(password));
    
    const isPasswordCorrect = await user.checkPassword(password)

    console.log(isPasswordCorrect);

    if (isPasswordCorrect) {
        return {
            id: user.id,
            name: user.name,
            email: user.email,
            token: generateJWT(user.id),
        };
    } else {
        throw new Error("Incorrect password");
    }
}

module.exports = {
    authenticateUser
}