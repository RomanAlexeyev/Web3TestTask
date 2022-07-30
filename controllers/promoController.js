const models = require("../models/Promo.js");
const Promo = models.Promo;

module.exports = {
  fetch: async (request, reply) => {
    const rangeQuery = JSON.parse(request.query.range);
    const sortQuery = JSON.parse(request.query.sort);
    const page = rangeQuery[0];
    const perPage = rangeQuery[1];
    const mongoSort = { [sortQuery[0]]: sortQuery[1].toLowerCase() };

    try {
      const promos = await Promo.aggregate([
        {
          $lookup: {
            from: "users",
            localField: "creator",
            foreignField: "id",
            as: "creator",
          },
        },
      ])
        .sort(mongoSort)
        .skip(page)
        .limit(perPage + 1 - page)
        .exec();
      reply.code(200).send(promos);
    } catch (e) {
      reply.code(500).send(e);
    }
  },

  delete: async (request, reply) => {
    try {
      const promoId = request.params.id;
      const promoToDelete = await Promo.findById(promoId);
      await Promo.findByIdAndDelete(promoId);
      reply.code(200).send({ data: promoToDelete });
    } catch (e) {
      reply.code(500).send(e);
    }
  },
};
