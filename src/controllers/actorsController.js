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

  createForm: (req, res) => {
    res.render("actors/create");
  },

  create: async (req, res) => {
    const { body } = req;

    try {
      await db.Actors.create({
        first_name: body.first_name,
        last_name: body.last_name,
        rating: body.rating,
      });
    } catch (error) {
      res.send(error);
    }

    res.redirect("/");
  },

  editForm: async (req, res) => {
    try {
      const actor = await db.Actors.findByPk(req.params.id);
      res.render("actors/edit", { actor });
    } catch (error) {
      res.send(error);
    }
  },

  edit: async (req, res) => {
    const { body } = req;
    try {
      await db.Actors.update(
        {
          ...body,
        },
        {
          where: { id: req.params.id },
        }
      );
      res.redirect("/actors");
    } catch (error) {
      res.send(error);
    }
  },

  delete: async (req, res) => {
    try {
      await db.Actors.destroy({
        where: { id: req.params.id },
      });

      res.redirect("/actors");
    } catch (error) {
      res.send(error);
    }
  },
};

module.exports = actorsController;
