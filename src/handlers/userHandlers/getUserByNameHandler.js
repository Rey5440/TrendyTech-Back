const { Op } = require("sequelize");
const { User } = require('../../db/db.js')


const getUserByName = async (req, res) => {
    const { name } = req.query;
    try {
        const userByName = await User.findAll({
            where: {
                name: { [Op.iLike]: `%${name}%` }
            }
        })
        if (userByName.length === 0) {
            throw Error(`no matches found for user: ${name} `)
        } else {
            res.status(200).json(userByName)
        }

    } catch (error) {
        res.status(500).json({ error: error.message })

    }
};


module.exports = {
    getUserByName
}