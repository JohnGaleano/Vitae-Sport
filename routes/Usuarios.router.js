const express = require("express");
const router = express.Router();
const usuariosController = require("../Controllers/Usuarios.controller");

router.post("/",usuariosController.create)
router.get("/",usuariosController.find )
router.get("/:id",usuariosController.findOne)
router.put("/:id",usuariosController.update)

module.exports = router
