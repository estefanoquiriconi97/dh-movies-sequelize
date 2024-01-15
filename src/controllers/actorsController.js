const db = require("../database/models");

const actorsController = {
  list: async (req, res) => {
    try {
      const actors = await db.Actores.findAll();
      res.json(actors);
    } catch (error) {
      res.send(error);
    }
  },

  detail: async (req, res) => {
    try {
        const actor = await db.Actores.findByPk(req.params.id);
        res.json(actor);
    } catch (error) {
      res.send(error);
    }
  },
};

module.exports = actorsController;
