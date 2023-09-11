const { User } = require("../../db/db")

const confirmAccount = async ( token ) => {
    const userConfirm = await User.findOne({ where: { token } } );

    if(!userConfirm){
        throw new Error("Invalid token")
    };

    try {
        userConfirm.confirmated = true;
        userConfirm.token = "";
        await userConfirm.save();
        return "Account confirmed successfully"
    } catch (error) {
        throw new Error(error.message)
    }
};

module.exports = {
    confirmAccount
}