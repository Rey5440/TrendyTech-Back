const { User } = require('../../db/db.js')

const createAuth0User = async (auth0UserData) => {

    const existingUser = await User.findOne({ where: { email: auth0UserData.email } })

    if (existingUser) {
        throw new Error("Usuario Auth0 ya existe en la Database");
    };

    const user = await User.create({ //find or create
        name: auth0UserData.name,
        email: auth0UserData.email,
        password: auth0UserData.sub,
        token: auth0UserData.sub,
        image: auth0UserData.picture

    })

    return user;
}

module.exports = {
    createAuth0User
}