// reservasController.js

const db = require('../db');

// Función para insertar una nueva reserva en la base de datos
exports.insertarReserva = (req, res) => {
  const { usuario_id, fecha_reserva, tipo_reserva, cantidad_personas, descripcion, estado } = req.body;
  // Construir la consulta SQL
  const query = 'INSERT INTO reservas (usuario_id, fecha_reserva, tipo_reserva, cantidad_personas, descripcion, estado) VALUES (?, ?, ?, ?, ?, ?)';
  const values = [usuario_id, fecha_reserva, tipo_reserva, cantidad_personas, descripcion, estado];

  // Ejecutar la consulta
  db.query(query, values, (error, result) => {
    if (error) {
      console.error('Error al insertar reserva:', error);
      return res.status(500).json({ message: 'Ocurrió un error al insertar la reserva.' });
    }

    // La reserva se insertó correctamente
    return res.status(201).json({ message: 'Reserva insertada exitosamente.' });
  });
};