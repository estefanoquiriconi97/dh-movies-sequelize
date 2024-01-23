const db = require("../database/models");
const Op = db.Sequelize.Op;

const moviesController = {
  list: async (req, res) => {
    try {
      const movies = await db.Movies.findAll({
        include: ["genre", "actors"],
      });
      res.render("movies/list", { movies });
    } catch (error) {
      console.error(error);
    }
  },

  detail: async (req, res) => {
    try {
      const movie = await db.Movies.findByPk(req.params.id, {
        include: ["genre", "actors"],
      });
      if (movie) {
        res.render("movies/detail", { movie });
      } else {
        return res.send("<h1>No existe</h1>");
      }
    } catch (error) {
      console.error(error);
    }
  },

  new: async (req, res) => {
    try {
      const movies = await db.Movies.findAll({
        order: [["realease_date", "DESC"]],
        limit: 5,
      });
      res.render("movies/newest", { movies });
    } catch (error) {
      console.error(error);
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
      res.render("movies/recommended", { movies });
    } catch (error) {
      console.error(error);
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
      console.error(error);
    }
  },

  add: async (req, res) => {
    try {
      const allGenres = await db.Genres.findAll();
      res.render("movies/add", { allGenres });
    } catch (error) {
      console.error(error);
    }
  },

  processAdd: async (req, res) => {
    try {
      const newMovie = {
        ...req.body,
      };
      await db.Movies.create(newMovie);

      res.redirect("/movies");
    } catch (error) {
      console.error(error);
    }
  },

  edit: async (req, res) => {
    try {
      const movie = await db.Movies.findByPk(req.params.id);
      const allGenres = await db.Genres.findAll();
      res.render("movies/edit", { movie, allGenres });
    } catch (error) {
      console.error(error);
    }
  },

  processEdit: async (req, res) => {
    const newDataMovie = {
      ...req.body,
    };

    try {
      await db.Movies.update(newDataMovie, {
        where: { id: req.params.id },
      });

      res.redirect("/movies/detail/" + req.params.id);
    } catch (error) {
      console.error(error);
    }
  },

  delete: async (req, res) => {
    try {
      const movie = await db.Movies.findByPk(req.params.id);
      res.render("movies/delete", { movie });
    } catch (error) {
      console.error(error);
    }
  },

  processDelete: async (req, res) => {
    try {
      await db.Movies.destroy({
        where: { id: req.params.id },
      });
      res.redirect("/movies");
    } catch (error) {
      console.error(error);
    }
  },
};

module.exports = moviesController;
