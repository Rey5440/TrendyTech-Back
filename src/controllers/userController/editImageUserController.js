const { User } = require("../../db/db")

const editImageUserController = async (email, newImage) => {

    try {
        const user = await User.findOne({ where: { email } });
        user.image = newImage;
        await user.save();
        return user;
    } catch (error) {
        throw new Error(error.message);
    }
};

module.exports = editImageUserController;