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

exports.AutenticarUser = async (req, res) => {
    const { email, password } = req.body;
  
    try {
      // Verificar si el usuario existe en la base de datos
      db.query('SELECT * FROM usuarios WHERE email = ? AND password = ?', [email, password], (err, result) => {
        if (err) {
          console.error('Error al realizar la autenticación', err);
          res.status(500).json({ message: 'Error en el servidor' });
        } else {
          if (result.length === 0) {
            res.status(404).json({ message: 'Usuario no encontrado' });
          } else {
            // Verificar la contraseña ingresada con la almacenada en la base de datos
            if (password !== result[0].password) {
              res.status(401).json({ message: 'Contraseña incorrecta' });
            } else {
              // Autenticación exitosa
              res.json({ message: 'Autenticación exitosa' });
            }
          }
        }
      });
    } catch (error) {
      console.error('Error al realizar la autenticación', error);
      res.status(500).json({ message: 'Error en el servidor' });
    }
  };




  /*
  

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
/*exports.AutenticarUser = async (req, res) => {
    const { email, password } = req.body;
     console.log(email,password);
  
    try {
      // Verificar si el usuario existe en la base de datos
      const user = await db.query('SELECT * FROM usuarios WHERE email = ? AND password = ?', [email, password]);  
     console.log(user);
      if (email!== user[0].email) {
        return res.status(404).json({ message: 'Usuario no encontrado' });
      }
  
      // Verificar la contraseña ingresada con la almacenada en la base de datos
      if (password!== user[1].password) {
        return res.status(401).json({ message: 'Contraseña incorrecta' });
      }
  
      // Autenticación exitosa
      res.json({ message: 'Autenticación exitosa' });
    } catch (error) {
      console.error('Error al realizar la autenticación', error);
      res.status(500).json({ message: 'Error en el servidor' });
    }
  };

*/