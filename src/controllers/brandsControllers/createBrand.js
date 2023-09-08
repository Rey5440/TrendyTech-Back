const { Brand } = require("../../db/db");
const { Op } = require("sequelize");

const createBrand = async (brand) => {
  const existing = await Brand.findOne({
    where: { name: { [Op.iLike]: `%${brand}%` } },
  });

  if (!existing) {
    const newBrand = await Brand.create({
      name: brand,
    });
    return newBrand.dataValues;
  }
  return existing;
};

module.exports = createBrand;
