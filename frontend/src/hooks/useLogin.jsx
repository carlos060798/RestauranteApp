import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
function   useLogin() {
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
    return {
      alerta,
        DataUser,
        handleChangeUser,
        handleSeccion,

    };
}

export default   useLogin;