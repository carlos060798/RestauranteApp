// reservasRoutes.js

const express = require('express');
const reservasController = require('../controllers/reservasController');

const router = express.Router();

// Ruta para insertar una nueva reservas y listar todas las reservas
router.route('/reservas').get(reservasController.listarReservas)
.post( reservasController.insertarReserva);


// Ruta para listar y actualizar todas las reservas

router.route('/reservas/:id').get(reservasController.listarReserva).put(reservasController.actualizarReserva).patch(reservasController.actualizarEstadoReserva)

module.exports = router;