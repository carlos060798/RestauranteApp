// reservasRoutes.js

const express = require('express');
const reservasController = require('../controllers/reservasController');

const router = express.Router();

// Ruta para insertar una nueva reservas y listar todas las reservas
router.get('/reservas',reservasController.listarReservas)
router.post('/reservas/:id', reservasController.insertarReserva);

// Ruta para listar una reserva en la base de datos por id
router.get('/reservas/:userId', reservasController.obtenerReservaPorUsuario);
// Ruta para listar y actualizar todas las reservas

router.route('reservas/:id').get(reservasController.listarReserva).put(reservasController.actualizarReserva).patch(reservasController.actualizarEstadoReserva)

module.exports = router;