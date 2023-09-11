const { authenticateUser } = require("../../controllers/userController/authenticateUser")

const authenticateUserHandler = async (req, res) => {

    const { email, password } = req.body;
    console.log(email, password);
    try {
        const userData = await authenticateUser(email, password)

        res.status(200).json(userData)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
};

module.exports = {
    authenticateUserHandler
}