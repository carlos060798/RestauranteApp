function EditarReserva() {
  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        data-toggle="modal"
        data-target="#editarModal"
      >
        Editar
      </button>

      <div
        className="modal fade"
        id="editarModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="editarModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="editarModalLabel">
                Editar Reserva
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label htmlFor="nombres">Nombres</label>
                  <input type="text" className="form-control" id="nombres" />
                </div>
                <div className="form-group">
                  <label htmlFor="apellidos">Apellidos</label>
                  <input type="text" className="form-control" id="apellidos" />
                </div>
                <div className="form-group">
                  <label htmlFor="documento">Documento</label>
                  <input type="text" className="form-control" id="documento" />
                </div>
                <div className="form-group">
                  <label htmlFor="identificacion">Identificación</label>
                  <input
                    type="text"
                    className="form-control"
                    id="identificacion"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" className="form-control" id="email" />
                </div>
                <div className="form-group">
                  <label htmlFor="fecha">Fecha</label>
                  <input type="date" className="form-control" id="fecha" />
                </div>
                <div className="form-group">
                  <label htmlFor="tipo">Tipo</label>
                  <select className="form-control" id="tipo">
                    <option>Cena</option>
                    <option>Almuerzo</option>
                    <option>Onces</option>
                    <option>Cumpleaños</option>
                    <option>Ocasión especial</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="personas">Personas</label>
                  <input type="number" className="form-control" id="personas" />
                </div>
                <div className="form-group">
                  <label htmlFor="descripcion">Descripción</label>
                  <textarea
                    className="form-control"
                    id="descripcion"
                    rows="3"
                  ></textarea>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Cancelar
              </button>
              <button type="button" className="btn btn-primary">
                Confirmar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditarReserva;
