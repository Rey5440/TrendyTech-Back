const getUserByEmailController = require("../../controllers/userController/getUserByEmailController");

const getUserByEmailHandler = async (req, res) => {
    const { email, name } = req.body;
    try {
        const user = await getUserByEmailController(email, name);
        res.status(200).json(user)

    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
};

module.exports = getUserByEmailHandler; 