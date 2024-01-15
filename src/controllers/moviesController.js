const db = require("../database/models");
const Op = db.Sequelize.Op;

const moviesController = {
  list: async (req, res) => {
    try {
      const movies = await db.Movies.findAll();
      res.render("moviesList", { movies });
    } catch (error) {
      res.send(error);
    }
  },

  detail: async (req, res) => {
    try {
      const movie = await db.Movies.findByPk(req.params.id);
      if (movie) {
        res.render("moviesDetail", { movie });
      } else {
        return res.send("<h1>No existe</h1>");
      }
    } catch (error) {
      res.send(error);
    }
  },

  new: async (req, res) => {
    try {
      const movies = await db.Movies.findAll({
        order: [["realease_date", "DESC"]],
        limit: 5,
      });
      res.render("newestMovies", { movies });
    } catch (error) {
      res.send(error);
    }
  },

  recommended: async (req, res) => {
    try {
      const movies = await db.Movies.findAll({
        order: [
          ["rating", "DESC"],
          ["release_date", "DESC"],
        ],
        limit: 5,
      });
      res.render("recommendedMovies", { movies });
    } catch (error) {
      res.send(error);
    }
  },

  toyStoryMovies: async (req, res) => {
    try {
      const movies = await db.Movies.findAll({
        where: {
          title: { [Op.like]: "%Toy Story%" },
        },
      });
      res.json(movies);
    } catch (error) {
      res.send(error);
    }
  },

};

module.exports = moviesController;
