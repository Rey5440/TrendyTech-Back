const { User,Order } = require("../../db/db");

const getUserByEmailController = async (email) => {
    
    const user = await User.findOne({ where: { email },include: Order});
        
    return user;
};

module.exports = getUserByEmailController;