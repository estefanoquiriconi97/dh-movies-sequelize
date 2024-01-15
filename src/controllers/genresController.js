const db = require("../database/models");

const genresController = {
  list: async (req, res) => {
    try {
      const genres = await db.Generos.findAll();
      res.render("genresList", { genres });
    } catch (error) {
      res.send(error);
    }
  },

  detail : async (req, res) => {
    try {
        const genre = await db.Generos.findByPk(req.params.id);
        res.render("genresDetail", {genre});
    } catch (error) {
        res.send(error);
    }
  }
};

module.exports = genresController;
