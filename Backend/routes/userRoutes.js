// reservasRoutes.js

const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

// Ruta para insertar una nueva reservas y listar todas las reservas
router.route('/user').get(userController.listarUsers)
.post( userController.insertarUser);

module.exports = router;