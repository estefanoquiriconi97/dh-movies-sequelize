const express = require("express");
const router = express.Router();
const moviesController = require("../controllers/moviesController");

router.get("/", moviesController.list);
router.get("/new", moviesController.new);
router.get("/recommended", moviesController.recommended);
router.get("/detail/:id", moviesController.detail);
router.get("/toy-story", moviesController.toyStoryMovies);


router.get('/add', moviesController.add)
router.post('/add', moviesController.processAdd);

router.get('/edit/:id', moviesController.edit);

router.put('/edit/:id', moviesController.processEdit);

module.exports = router;
