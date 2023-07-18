// reservasController.js
const bcrypt = require("bcrypt");

const db = require("../db");

// Función para insertar una nueva reserva en la base de datos
exports.insertarUser = (req, res) => {
  const { nombres, apellidos, tipodocumento, identificacion, email } =
    req.body;
  console.log({ nombres, apellidos, tipodocumento, identificacion, email });
  const password = "";
  const rol_id = 2;

  // Construir la consulta SQL
  const insertQuery =
    "INSERT INTO usuarios (nombres, apellidos, tipodocumento, identificacion, email, password,rol_id) VALUES (?, ?, ?, ?, ?,?,?)";
  const values = [
    nombres,
    apellidos,
    tipodocumento,
    identificacion,
    email,
    password,
    rol_id,
  ];

  // Ejecutar la consulta
  db.query(insertQuery, values, (error, result) => {
    if (error) {
      console.error("Error al insertar el usuario:", error);
      return res
        .status(500)
        .json({ message: "Ocurrió un error al insertar el usuario" });
    }

    // La reserva se insertó correctamente
    console.log(result);
    return res.status(200).json({ message: "Reserva insertada exitosamente." ,idUsuer:result.insertId});
  });
};

exports.listarUsers = (req, res) => {
  const query = "SELECT nombres, apellidos, email,id FROM usuarios";
  db.query(query, (error, result) => {
    if (error) {
      console.error("Error al listar usuarios", error);
      return res
        .status(500)
        .json({ message: "Ocurrió un error al listar los usuarios." });
    }
    const usuarios = result.map((usuario) => ({
      nombres: usuario.nombres,
      apellidos: usuario.apellidos,
      email: usuario.email,
      id: usuario.id,
    }));

    return res
      .status(200)
      .json({ message: "Usuarios listados exitosamente.", usuarios });
  });
};
exports.AutenticarUser = (req, res) => {
  const { email, password } = req.body;

  // Verificar si el usuario existe en la base de datos
  db.query(
    "SELECT * FROM usuarios WHERE email = ?",
    [email],
    (err, results) => {
      if (err) {
        console.error("Error al realizar la consulta", err);
        return res.status(500).json({ message: "Error en el servidor" });
      }

      // Verificar si el correo existe en la base de datos
      if (results.length === 0) {
        return res.status(404).json({ message: "Correo no encontrado" });
      }

      const user = results[0];

      // Verificar la contraseña ingresada con la almacenada en la base de datos
      if (password !== user.password) {
        return res.status(401).json({ message: "Contraseña incorrecta" });
      }

      // Verificar el rol del usuario
      if (user.rol_id === 1) {
        // Es administrador

        return res.json({ message: "Autenticación exitosa (Administrador)" });
      } else {
        return res
          .status(401)
          .json({ message: "Tu rol no es de administrador" });
      }
    }
  );
};

exports.listarUsuarioPorId = (req, res) => {
  const { id } = req.params;
  const query = "SELECT nombres, apellidos, email FROM usuarios WHERE id = ?";
  db.query(query, [id], (error, result) => {
    if (error) {
      console.error("Error al listar usuario", error);
      return res
        .status(500)
        .json({ message: "Ocurrió un error al listar el usuario." });
    }

    if (result.length === 0) {
      return res.status(404).json({
        message: "No se encontró el usuario con el ID proporcionado.",
      });
    }

    const usuario = {
      nombres: result[0].nombres,
      apellidos: result[0].apellidos,
      email: result[0].email,
      id: req.params.id,
    };

    return res
      .status(200)
      .json({ message: "Usuario listado exitosamente.", usuario });
  });
};

exports.actualizarDatosUser = (req, res) => {
  const { id } = req.params;
  const { nombres, apellidos, email } = req.body;
  const query =
    "UPDATE usuarios SET nombres=?, apellidos=?, email=? WHERE id=?";
  db.query(query, [nombres, apellidos, email, id], (error, result) => {
    if (error) {
      console.error("Error al actualizar usuarios", error);
      return res
        .status(500)
        .json({ message: "Ocurrió un error al actualizar los usuarios." });
    }

    return res
      .status(200)
      .json({ message: "Usuarios actualizados exitosamente." });
  });
};
