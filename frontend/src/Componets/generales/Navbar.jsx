function Menu() {
 return(    <>
  <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container">
      <h1 className="navbar-brand text-primary">Restaurante APP</h1>
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
        <ul className="navbar-nav ms-auto text-center">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">
              Inicio
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Reserva
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Iniciar seccion
            </a>
          </li>
         
        </ul>
      </div>
    </div>
  </nav>
</>
);
  
}

export default Menu;