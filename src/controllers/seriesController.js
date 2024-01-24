const db = require("../database/models");

const seriesController = {
  list: async (req, res) => {
    try {

      const series = await db.Series.findAll({
        include : ["genre"]
      });
      res.render('series/list', {series});

    } catch (error) {console.error(error)}
  },

  detail: async (req, res) => {
    try {

    } catch (error) {console.error(error)}
  },
};

module.exports = seriesController;
