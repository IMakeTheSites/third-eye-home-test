const express = require("express");
const router = express.Router();
const carsController = require("../controller/cars");

router.post("/", carsController.create);
router.get("/", carsController.get);
router.get("/:id", carsController.getById);

module.exports = router;
