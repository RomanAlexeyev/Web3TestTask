const models = require('../models/Promo.js');
const Promo = models.Promo;

module.exports = (request, reply, done) => {
    Promo.count({}, (err, count) => {
    if (err) {
      console.error(err);
      reply.code(500).send('Error!');
    }
    reply.header('Content-Range', `promos 0-10/${count}`);
    done();
  });
};