const { User } = require("../../db/db")

const editNameUserController = async ( email, newName ) => {
    
    try {
        const user = await User.findOne({ where: { email } } );
        if (!user) {
            throw new Error('User not found');
        }
        user.name = newName;
        await user.save();
        return user;
    } catch (error) {
        throw new Error(error.message);
    }
};

module.exports = editNameUserController;
