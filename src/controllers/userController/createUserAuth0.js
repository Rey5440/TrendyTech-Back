const { User } = require("../../db/db.js");

const createAuth0User = async (auth0UserData) => {
  const existingUser = await User.findOne({
    where: { email: auth0UserData.email },
  });

  if (!existingUser) {
    const user = await User.create({
      name: auth0UserData.name,
      email: auth0UserData.email,
      password: auth0UserData.sub,
      token: auth0UserData.token,
      image: auth0UserData.picture,
      confirmated: true
    });
    return user.dataValues;
  }
  if (existingUser) {
    if (existingUser.token !== auth0UserData.token) {
      const [_, updatedUser] = await User.update(
        {
          token: auth0UserData.token,
        },
        {
          where: { email: existingUser.email },
          returning: true, // Esto devuelve el objeto actualizado
        }
      );

      return updatedUser[0].dataValues; // Devuelve el objeto actualizado
    }
  }
};

module.exports = {
  createAuth0User,
};
