// reservasController.js

const db = require("../db");
     
// Función para insertar una nueva reserva en la base de datos
exports.insertarUser= (req, res) => {
  const {
    nombres	,
		apellidos,	
		tipo_documento,	
	identificacion,	
     email
  } = req.body;
  // Construir la consulta SQL
  const insertQuery = "INSERT INTO usuarios (nombres, apellidos, tipo_documento, identificacion, email) VALUES (?, ?, ?, ?, ?)";
  const values = [
    nombres	,
		apellidos,	
		tipo_documento,	
	identificacion,	
     email
  ];

  // Ejecutar la consulta
  db.query(insertQuery, values, (error, result) => {
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


exports.listarUsers = (req, res) => {
    const query = "SELECT * FROM usuarios";
    db.query(query, (error, result) => {
      if (error) {
        console.error("Error al listar usuarios", error);
        return res
          .status(500)
          .json({ message: "Ocurrió un error al listar los usuarios." });
      }
  
      // La reserva se insertó correctamente
      return res
        .status(200)
        .json({ message: "usuarios listados exitosamente.", result });
    });
}