const { User } = require('../../db/db.js')
// const {generateToken} = require('../../helpers/generateToken.js')


const createUser = async (name, email, password) => {
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
        throw new Error('The email is already in use');
    }

    const user = await User.create({
        name,
        email,
        password,
        //token: generateToken()
    });

    return user;
};

module.exports = {
    createUser
};
