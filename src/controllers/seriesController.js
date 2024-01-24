const db = require("../database/models");

const seriesController = {
  list: async (req, res) => {
    try {
      const series = await db.Series.findAll({
        include: ["genre"],
      });
      res.render("series/list", { series });
    } catch (error) {
      console.error(error);
    }
  },

  detail: async (req, res) => {
    try {
      const serie = await db.Series.findByPk(req.params.id,{
        include : ["genre"]
      });
      res.render("series/detail", { serie });
    } catch (error) {
      console.error(error);
    }
  },
};

module.exports = seriesController;
