// reservasController.js
const bcrypt = require('bcrypt');

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

exports.AutenticarUser = (req, res) => {
  const { email, password } = req.body;

  // Verificar si el usuario existe en la base de datos
  db.query('SELECT * FROM usuarios WHERE email = ?', [email], (err, results) => {
    if (err) {
      console.error('Error al realizar la consulta', err);
      return res.status(500).json({ message: 'Error en el servidor' });
    }

    // Verificar si el correo existe en la base de datos
    if (results.length === 0) {
      return res.status(404).json({ message: 'Correo no encontrado' });
    }

    const user = results[0];

    // Verificar la contraseña ingresada con la almacenada en la base de datos
    if (password !== user.password) {
      return res.status(401).json({ message: 'Contraseña incorrecta' });
    }

    // Verificar el rol del usuario
    if (user.rol_id === 1) {
      // Es administrador
     
      return  res.json({ message: 'Autenticación exitosa (Administrador)' });
    }else{
      return   res.status(401).json({ message: 'Tu rol no es de administrador' });

  }
  });
};
