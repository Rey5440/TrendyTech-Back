const deleteUserController = require("../../controllers/userController/deleteUserController");

const deleteUserHandler = async (req, res) => {
    const { userId } = req.body;
    try {
        const user = await deleteUserController(userId);
        res.status(200).json(user)

    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
};

module.exports = deleteUserHandler;