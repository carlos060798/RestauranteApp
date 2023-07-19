import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Alerta from "../generales/Alerta";
import useLogin from "../../hooks/useLogin";
function LoginApp() {
const  {
  alerta,
    DataUser,
    handleChangeUser,
    handleSeccion,
    
} = useLogin();

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
