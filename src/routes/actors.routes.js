const express = require("express");
const router = express.Router();

const actorsController = require("../controllers/actorsController");

router.get("/", actorsController.list);
router.get("/detail/:id", actorsController.detail);
router.get("/create", actorsController.createForm);
router.get("/edit/:id", actorsController.editForm);

router.put("/edit/:id", actorsController.edit);

router.delete("/delete/:id", actorsController.delete);

router.post("/create", actorsController.create);

module.exports = router;
