import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import axios from 'axios';
function LoginApp() {

  const  [DataUser,setDataUser] = useState({
    email:"",
    password:""
  })

  const redireccion = useNavigate();

  const handleChangeUser = (e) => {
    const { name, value } = e.target;
    setDataUser((prevDataUser) => ({
      ...prevDataUser,
      [name]: value
    }));
  
  };

  const handleSeccion= async (e) => {
    e.preventDefault();

    try {
      // 1. Llamar a la API para crear el usuario
      
      const usuarioResponse = await axios.post('http://localhost:4000/login', DataUser);
      

      console.log('AUTENTICACION CORRECTA');
      redireccion('/admin');
    } catch (error) {
      console.error('NO SE PUDO AUTENTICAR:', error);
    }
  };

    return (
      <>
      <div className="container my-5">
  <h1 className="text-center">Inicio de Sesión</h1>
  <div className="row justify-content-center">
    <div className="col-12 col-md-8 col-lg-5">
      <form className=" border border-primary rounded p-4" onSubmit={handleSeccion}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            aria-describedby="emailHelp"
            name="email"
            value={DataUser.email}
            onChange={handleChangeUser}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="Password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            name="password"
            value={DataUser.password}
            onChange={handleChangeUser}
          />
        </div>
        <div className="d-flex justify-content-center">
          <button type="submit" className="btn btn-primary">
            Iniciar Sesión
          </button>
        </div>
      </form>
    

      </div>
    </div>
  </div>

      </>
    );
  }
  
  export default LoginApp;
  