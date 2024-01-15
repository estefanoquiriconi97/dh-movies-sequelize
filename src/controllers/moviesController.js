const db = require("../database/models");
const Op = db.Sequelize.Op;

const moviesController = {
  list: (req, res) => {
    db.Peliculas.findAll()
      .then((peliculas) => {
        res.render("moviesList", {
          movies: peliculas,
        });
      })
      .catch((err) => res.send(err));
  },

  detail: (req, res) => {
    db.Peliculas.findByPk(req.params.id)
      .then((pelicula) => {
        if (pelicula != null) {
          return res.render("moviesDetail", {
            movie: pelicula,
          });
        } else {
          return res.send("<h1>No existe</h1>");
        }
      })
      .catch((err) => res.send(err));
  },

  new: (req, res) => {
    db.Peliculas.findAll({
      order: [["release_date", "DESC"]],
    })
      .then((peliculas) => {
        res.render("newestMovies", {
          movies: peliculas,
        });
      })
      .catch((err) => res.send(err));
  },

  recommended: (req, res) => {
    db.Peliculas.findAll({
        order : [
            ["rating", "DESC"]
            ["release_date", "DESC"]
        ],
        limit : 5
    })
      .then((peliculas) => {
        res.render("recommendedMovies",{
            movies : peliculas
        })
      })
      .catch((err) => res.send(err));
  },
};

module.exports = moviesController;
