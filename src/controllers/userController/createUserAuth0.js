const { User } = require('../../db/db.js')

const createAuth0User = async (auth0UserData) => {


    console.log(auth0UserData);
    
    const existingUser = await User.findOne({ where: { email: auth0UserData.email } })

    if (existingUser) {
        throw new Error("Usuario Auth0 ya existe en la Database");
    };

    const user = await User.create({
        name: auth0UserData.name,
        email: auth0UserData.email,
        password: auth0UserData.sub
    })

    return user;
}

module.exports = {
    createAuth0User
}