const db = require("../db");

// Función para insertar una nueva reserva en la base de datos
exports.insertarReserva = (req, res) => {
  const { fecha_reserva, tipo_reserva, cantidad_personas, observaciones } =
    req.body;
  const usuario_id = req.params.id;
  const estado = "pendiente";
  // Construir la consulta SQL
  const query =
    "INSERT INTO reservas (usuario_id, fecha_reserva, tipo_reserva, cantidad_personas,observaciones,estado) VALUES (?, ?, ?, ?, ?, ?)";
  const values = [
    usuario_id,
    fecha_reserva,
    tipo_reserva,
    cantidad_personas,
    observaciones,
    estado,
  ];

  // Ejecutar la consulta
  db.query(query, values, (error, result) => {
    if (error) {
      console.error("Error al insertar reserva:", error);
      return res
        .status(500)
        .json({ message: "Ocurrió un error al insertar la reserva." });
    }

    // La reserva se insertó correctamente
    return res.status(200).json({ message: "Reserva insertada exitosamente." });
  });
};

exports.listarReservas = (req, res) => {
  const query = "SELECT * FROM reservas";
  db.query(query, (error, result) => {
    if (error) {
      console.error("Error al listar reservas:", error);
      return res
        .status(500)
        .json({ message: "Ocurrió un error al listar las reservas." });
    }

    // La reserva se insertó correctamente
    return res
      .status(200)
      .json({ message: "Reservas listadas exitosamente.", result });
  });
};

// Función para listar una reserva en la base de datos por id
exports.listarReserva = (req, res) => {
  const ReservaId = req.params.id;
  const query = "SELECT * FROM reservas WHERE id = ?";
  db.query(query, ReservaId, (error, result) => {
    try {
      return res
        .status(200)
        .json({ message: "Reserva listada exitosamente.", result });
    } catch (error) {
      console.error("Error al listar reservas:", error);
      return res
        .status(500)
        .json({ message: "Ocurrió un error al listar las reservas." });
    }
  });
};

// Función para actualizar una reserva en la base de datos por id

exports.actualizarReserva = (req, res) => {
  const ReservaId = req.params.id;
  const { fecha_reserva, tipo_reserva, cantidad_personas, descripcion } =
    req.body;
  const query =
    "UPDATE reservas SET fecha_reserva = ?, tipo_reserva = ?, cantidad_personas = ?, descripcion = ? WHERE id = ?";
  const values = [
    fecha_reserva,
    tipo_reserva,
    cantidad_personas,
    descripcion,
    ReservaId,
  ];
  console.log(values);
  db.query(query, values, (error, result) => {
    try {
      return res
        .status(200)
        .json({ message: "Reserva actualizada exitosamente.", result });
    } catch (error) {
      console.error("Error al actualizar reservas:", error);
      return res
        .status(500)
        .json({ message: "Ocurrió un error al actualizar las reservas." });
    }
  });
};

// Función para actualizar un atributo de estado una reserva en la base de datos por id

exports.actualizarEstadoReserva = (req, res) => {
  const ReservaId = req.params.id;
  const { estado } = req.body;
  const query = "UPDATE reservas SET estado = ? WHERE id = ?";
  const values = [estado, ReservaId];
  console.log(values);
  db.query(query, values, (error, result) => {
    try {
      return res
        .status(200)
        .json({ message: "Reserva  confirmada exitosamente.", result });
    } catch (error) {
      console.error("Error al actualizar reservas:", error);
      return res
        .status(500)
        .json({ message: "Ocurrió un error al actualizar las reservas." });
    }
  });
};

exports.obtenerReservaPorUsuario = (req, res) => {
  const userId = req.params.userId;
  const query = `SELECT * FROM reservas WHERE usuario_id= ?`;
  db.query(query, userId, (error, result) => {
    if (error) {
      console.error("Error al obtener la reserva:", error);
      return res
        .status(500)
        .json({ message: "Ocurrió un error al obtener la reserva." });
    }

    if (result.length === 0) {
      return res.status(404).json({ message: "Reserva no encontrada." });
    }

    const reserva = result[0];
    return res
      .status(200)
      .json({ message: "Reserva obtenida exitosamente.", reserva });
  });
};
