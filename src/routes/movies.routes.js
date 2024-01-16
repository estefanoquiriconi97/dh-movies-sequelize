const express = require("express");
const router = express.Router();
const moviesController = require("../controllers/moviesController");

router.get("/", moviesController.list);
router.get("/new", moviesController.new);
router.get("/recommended", moviesController.recommended);
router.get("/detail/:id", moviesController.detail);
router.get("/toy-story", moviesController.toyStoryMovies);

router.get('/create', moviesController.create)
router.post('/create', moviesController.save);

module.exports = router;
