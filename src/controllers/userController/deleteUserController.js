const { User } = require("../../db/db")

const deleteUserController = async (userId) => {

    try {
        const user = await User.findOne({ where: { id: userId } });
        if (!user) {
            throw new Error("El usuario no fue encontrado");
        }
        user.isDeleted = !user.isDeleted;  // Cambia el valor de isDeleted al opuesto
        await user.save();
        
        return user;
    } catch (error) {
        throw new Error(error.message);
    }
};

module.exports = deleteUserController;