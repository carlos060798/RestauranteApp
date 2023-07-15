// reservasRoutes.js

const express = require('express');
const reservasController = require('../controllers/reservasController');

const router = express.Router();

// Ruta para insertar una nueva reserva
router.post('/reservas', reservasController.insertarReserva);

module.exports = router;