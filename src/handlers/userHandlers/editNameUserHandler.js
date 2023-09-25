const editNameUserController = require("../../controllers/userController/editNameUserController");

const editNameUserHandler = async (req, res) => {
    const { email, newName } = req.body;
    try {
        const user = await editNameUserController(email, newName);
        res.status(200).json(user)

    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
};

module.exports = editNameUserHandler;