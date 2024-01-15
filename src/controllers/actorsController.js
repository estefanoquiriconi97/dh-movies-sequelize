const db = require("../database/models");

const actorsController = {
  list: async (req, res) => {
    try {
      const actors = await db.Actors.findAll();
      res.json(actors);
    } catch (error) {
      res.send(error);
    }
  },

  detail: async (req, res) => {
    try {
      const actor = await db.Actors.findByPk(req.params.id);
      res.json(actor);
    } catch (error) {
      res.send(error);
    }
  },
};

module.exports = actorsController;
