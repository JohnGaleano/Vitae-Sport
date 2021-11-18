const express = require("express");
const router = express.Router();
const productosController = require("../Controllers/Productos.controller");

router.post("/",productosController.create)
router.get("/",productosController.find )
router.get("/:id",productosController.findOne)
router.put("/:id",productosController.update)

module.exports = router
