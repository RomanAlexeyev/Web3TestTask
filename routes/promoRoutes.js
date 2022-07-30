const promoController = require("../controllers/promoController");

module.exports = (app) => {
  app.get("/api/promos", promoController.fetch);

  app.delete("/api/promos/:id", promoController.delete);
};
