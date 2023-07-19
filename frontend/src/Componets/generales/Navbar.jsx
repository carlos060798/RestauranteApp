import { Link } from "react-router-dom";
function Menu() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <h1 className="navbar-brand text-primary fw-bold"><i className="bi bi-egg-fill">Restaurante APP</i></h1>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto text-center text-primary">
              <li className="nav-item">
                <Link className="nav-link active text-primary fw-bold" aria-current="page" to="/">
                  Reserva
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active text-primary fw-bold" aria-current="page" to="/login">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Menu;
