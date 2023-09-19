const{ User} = require('../../db/db.js')


// Ruta para traer todos los usuarios

const getAllUsers = async (req, res) => {
    try {
        const allUsers = await User.findAll();

        if( allUsers.length === 0 ) {
            res.status(400).json({message: "There are no active users"})
        } else {
            const users = allUsers.map(user => {
                const { id, name, email, isAdmin, confirmated } = user;
                return { id, name, email, isAdmin, confirmated };
            });
            return res.json(users);
        }
    } catch (error) {

        console.error(error);
        return res.status(400).json({ message: "Error getting users" });
    }
}

module.exports = {
    getAllUsers
}