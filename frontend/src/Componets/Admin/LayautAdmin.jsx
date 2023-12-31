import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ReservasTable from "./componet/Table";

function LayautADmin() {
  const redireccion = useNavigate();

  // Función para cerrar la sesión
  const handleCerrarSesion = () => {
    localStorage.removeItem("usuarioLogeado");
    redireccion("/login");
  };

  useEffect(() => {
    // Verificar si el usuario ha iniciado sesión
    const usuarioLogeado = localStorage.getItem("usuarioLogeado");
    if (!usuarioLogeado || usuarioLogeado !== "true") {
      redireccion("/login");
    }
  }, [redireccion]);

  return (
    <>
      <div className="container mt-5">
        <div className="d-flex align-items-start">
          <div
            className="nav flex-column nav-pills me-3"
            id="v-pills-tab"
            role="tablist"
            aria-orientation="vertical"
          >
            <button
              className="nav-link"
              id="v-pills-profile-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-profile"
              type="button"
              role="tab"
              aria-controls="v-pills-profile"
              aria-selected="false"
            >
              Reservas
            </button>

            <button
              className="nav-link"
              id="v-pills-messages-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-messages"
              type="button"
              role="tab"
              aria-controls="v-pills-messages"
              aria-selected="false"
              onClick={handleCerrarSesion}
            >
              Cerrar Sesión
            </button>
          </div>
          <div className="tab-content" id="v-pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="v-pills-home"
              role="tabpanel"
              aria-labelledby="v-pills-home-tab"
              tabIndex="0"
            >
              <ReservasTable />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LayautADmin;
