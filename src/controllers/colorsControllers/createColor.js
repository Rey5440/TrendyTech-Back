const { Color } = require("../../db/db");

const createColor = async (colors) => {

  const existing = await Color.findOrCreate({
    where: { name: colors },
  });

  const juanMagic = existing[0].dataValues
  
  return juanMagic;
};

module.exports = createColor;

