const editImageUserController = require("../../controllers/userController/editImageUserController");


const editImageUserHandler = async (req, res) => {
    const { email, newImage } = req.body;
    try {
        const user = await editImageUserController(email, newImage);
        res.status(200).json(user)

    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
};

module.exports = editImageUserHandler;