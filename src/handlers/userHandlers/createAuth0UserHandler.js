const {
  createAuth0User,
} = require("../../controllers/userController/createUserAuth0");

const createAuth0UserHandler = async (req, res) => {
  try {
    const auth0UserData = req.body;

    const user = await createAuth0User(auth0UserData);

    res.status(200).json({ msg: "Usuario Auth0 creado con exito", user });
  } catch (error) {
    if (error.message === "Usuario Auth0 ya existe en la Database") {
      res.status(409).json({ error: "Usuario Auth0 ya existe en la Database" });
    } else {
      console.log(error);
      res.status(500).json({ error: error.message });
    }
  }
};

module.exports = {
  createAuth0UserHandler,
};
