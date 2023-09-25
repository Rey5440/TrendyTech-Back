const { User } = require("../../db/db");

const getUserByEmailController = async (email) => {
    
    const user = await User.findOne({ where: { email } });
        
    return user;
};

module.exports = getUserByEmailController;