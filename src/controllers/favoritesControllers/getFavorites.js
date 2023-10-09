const { Favorite } = require("../../db/db");

async function getFavoritesControllers(userId) {
  console.log("Este es id que recibe por params", userId);
  try {
    const favorite = await Favorite.findOne({
      where: { userId: userId}
    })

    if(!favorite){
      return { error: "El usuario no tiene lista de favoritos"}
    }
    
    return favorite.favorites
  } catch (error) {
    console.log(error);
    throw error; 
  }
}

module.exports = getFavoritesControllers;