const express = require("express");
const router = express.Router();
const usuariosController = require("../Controllers/Usuarios.controller");

router.post("/",usuariosController.create)

module.exports = router
