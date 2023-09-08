const { Color } = require("../../db/db");
const { Op } = require("sequelize");

const createColor = async (color) => {
  const existing = await Color.findOne({
    where: { name: { [Op.iLike]: `%${color}%` } },
  });
  if (!existing) {
    const newColor = await Color.create({
      name: color,
    });
    return newColor.dataValues;
  }
  return existing;
};

module.exports = createColor;

