const { User } = require("../../db/db.js")

const getUserById = async (req, res) => {
    const { id } = req.params;
    try {
        const userId = await User.findByPk(id)

        if (!userId) {
            return res.status(404).json({ message: `User not found with id: ${id}`})
        }

        console.log(userId);
        const user = {
            id: userId.id,
            name: userId.name,
            email: userId.email
        };

        return res.status(200).json(user);

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
};

module.exports = {
    getUserById
}; 