const express = require("express");
const router = express.Router();
const productosController = require("../Controllers/Productos.controller");

router.post("/",productosController.create)

module.exports = router
