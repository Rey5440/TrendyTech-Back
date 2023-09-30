const { User } = require("../../db/db.js");

const createAuth0User = async (auth0UserData) => {
  const existingUser = await User.findOne({
    where: { token: auth0UserData.token },
  });
  if (existingUser) {
    return existingUser;
  } else {
    const user = await User.create({
      name: auth0UserData.name,
      email: auth0UserData.email,
      password: auth0UserData.sub,
      token: auth0UserData.token,
      image: auth0UserData.picture,
    });
    return user;
  }
};

module.exports = {
  createAuth0User,
};
