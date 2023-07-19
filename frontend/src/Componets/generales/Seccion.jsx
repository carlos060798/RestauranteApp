import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Alerta from "../generales/Alerta";
function LoginApp() {
  const [DataUser, setDataUser] = useState({
    email: "",
    password: "",
  });

  const redireccion = useNavigate();
  const [alerta, setAlerta] = useState({});

  const handleChangeUser = (e) => {
    const { name, value } = e.target;
    setDataUser((prevDataUser) => ({
      ...prevDataUser,
      [name]: value,
    }));
  };

  const handleSeccion = async (e) => {
    e.preventDefault();
    if ([DataUser.email, DataUser.password].includes("")) {
      setAlerta({
        msg: "Todos los campos son obligatorios",
        error: true,
      });
      return;
    }

    try {
      const usuarioResponse = await axios.post(
        "http://localhost:4000/login",
        DataUser
      );
      console.log("RESPUESTA DE LA API:", usuarioResponse);
      const { data } = usuarioResponse;
      console.log(data);

      if (data.message.includes("exitosa")) {
        // Autenticación exitosa
        console.log("AUTENTICACION CORRECTA");
        setAlerta({
          msg: data.message,
          error: false,
        });

        // Guardar la información de inicio de sesión en el almacenamiento local del navegador
        localStorage.setItem("usuarioLogeado", "true");

        // Redirigir después de 5 segundos
        setTimeout(() => {
          redireccion("/admin");
        }, 5000);
      } else {
        // Autenticación fallida
        console.error("AUTENTICACION FALLIDA:", data.message);
        setAlerta({
          msg: data.message,
          error: true,
        });
      }
    } catch (error) {
      console.error("ERROR DE AUTENTICACION:", error);

      // Verificar si el error es por email incorrecto o contraseña incorrecta
      if (error.response && error.response.status === 401) {
        // Error de autenticación: email o contraseña incorrecta
        setAlerta({
          msg: "contraseña incorrecta",
          error: true,
        });
      } else {
        // Otro tipo de error en la solicitud
        setAlerta({
          msg: "No se pudo autenticar usuario no existe",
          error: true,
        });
      }
    }
  };
  return (
    <>
      <div className="container my-5">
        <h1 className="text-center fw-bold  text-primary">lNICIO DE SECCION</h1>
        <div className="row justify-content-center">
          <div className="col-md-10 mx-auto col-lg-5">
            <form
              className="p-4 p-md-5 border rounded-3 bg-body-tertiary"
              onSubmit={handleSeccion}
            >
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="name@example.com"
                  name="email"
                  value={DataUser.email}
                  onChange={handleChangeUser}
                />
                <label htmlFor="floatingInput">Email address</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  name="password"
                  value={DataUser.password}
                  onChange={handleChangeUser}
                />
                <label htmlFor="floatingPassword">Password</label>
              </div>

              <button className="w-100 btn btn-lg btn-primary" type="submit">
                Login
              </button>
              <hr className="my-4" />

              <small className="text-body-secondary"></small>
            </form>
            {alerta.msg && <Alerta alerta={alerta} />}{" "}
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginApp;
