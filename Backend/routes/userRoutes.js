// reservasRoutes.js

const express = require("express");
const userController = require("../controllers/userController");

const router = express.Router();

// Ruta para insertar una nueva reservas y listar todas las reservas
router
  .route("/user")
  .get(userController.listarUsers)
  .post(userController.insertarUser);

router.post("/login", userController.AutenticarUser);

router
  .route("/user/:id")
  .get(userController.listarUsuarioPorId)
  .post(userController.actualizarDatosUser);

module.exports = router;
