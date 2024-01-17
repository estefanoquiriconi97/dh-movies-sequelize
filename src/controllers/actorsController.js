const db = require("../database/models");

const actorsController = {
  list: async (req, res) => {
    try {
      const actors = await db.Actors.findAll();
      res.render("actors/list", { actors });
    } catch (error) {
      res.send(error);
    }
  },

  detail: async (req, res) => {
    try {
      const actor = await db.Actors.findByPk(req.params.id);
      res.render("actors/detail", { actor });
    } catch (error) {
      res.send(error);
    }
  },

  create: (req, res) => {
    res.render("actors/create");
  },

  save: async (req, res) => {
    const { body } = req;

    await db.Actors.create({
      first_name: body.first_name,
      last_name: body.last_name,
      rating: body.rating,
    });

    res.redirect("/");
  },
};

module.exports = actorsController;
