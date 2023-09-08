const { TypeProduct } = require("../../db/db");
const { Op } = require("sequelize");

const createType = async (type) => {
  const existing = await TypeProduct.findOne({
    where: { name: { [Op.iLike]: `%${type}%` } },
  });

  if (!existing) {
    const newType = await TypeProduct.create({
      name: type,
    });
    return newType.dataValues;
  }
  return existing;
};

module.exports = createType;
