import { useNavigate } from 'react-router-dom';
function LoginApp() {

  const redireccion = useNavigate();
  
  const handleSeccion = (e) => {
    e.preventDefault();
    console.log("Seccion");
    redireccion("/");
  }

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
            id="email"
            aria-describedby="emailHelp"
            name="email"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="Password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="Password"
            name="Password"
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
  