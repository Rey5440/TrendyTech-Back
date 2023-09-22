
const getUserByTokenHandler = async (req, res) => {
    const { token } = req.body;
    try {
        const user = await getUserByTokenController(token);
        res.status(200).json(user)

    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
};

module.exports = getUserByTokenHandler; 