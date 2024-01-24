const express = require('express');
const router = express.Router();

const seriesController = require('../controllers/seriesController');

router.get('/', seriesController.list);
router.get('/detail/:id', seriesController.detail);

module.exports = router;
