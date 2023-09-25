
const { createUser } = require("../../controllers/userController/createUser")

const createUserHandler = async (req, res) => {
    console.log('hola robertito')
    try {
        const { name, email, password } = req.body;
        const user = await createUser(name, email, password);
        console.log('hola calenius')
        res.status(200).json({ msg: "User created successfully", user });
    } catch (error) {
        if (error.message === 'The email is already in use') {
            res.status(409).json({ error: 'The email is already in use' });
        } else {
            console.error(error);
            res.status(500).json({ error: 'Error creating user' });
        }
    }
}

module.exports = {
    createUserHandler
}