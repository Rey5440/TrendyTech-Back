const { confirmAccount } = require("../../controllers/userController/confirmAccount")

const confirmAccountHandler = async ( req, res ) => {
    const { token } = req.params;
  
    try {
        const result = await confirmAccount(token);
        res.status(200).json({ msg: result })
    } catch (error) {
        res.status(500).json({ msg: error.message})
    }
};

module.exports = {
    confirmAccountHandler
}