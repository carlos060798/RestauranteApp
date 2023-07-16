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
{
  /*   return ( <>
     <div classNameName="container my-5">
  <h1 classNameName="text-center">Formulario de Registro</h1>
  <form>
    <div classNameName="row">
      <div classNameName="col-md-6">
        <div classNameName="mb-3">
          <label htmlFor="nombres" classNameName="form-label">
            Nombres
          </label>
          <input type="text" classNameName="form-control" id="nombres" />
        </div>
        <div classNameName="mb-3">
          <label htmlFor="apellidos" classNameName="form-label">
            Apellidos
          </label>
          <input type="text" classNameName="form-control" id="apellidos" />
        </div>
        <div classNameName="mb-3">
          <label htmlFor="tipoDocumento" classNameName="form-label">
            Tipo de Documento
          </label>
          <select classNameName="form-select" id="tipoDocumento">
            <option value="">Seleccionar</option>
            <option value="cc">Cédula de Ciudadanía</option>
            <option value="ti">Tarjeta de Identidad</option>
            <option value="ce">Cédula de Extranjería</option>
            <option value="pp">Pasaporte</option>
          </select>
        </div>
        <div classNameName="mb-3">
          <label htmlFor="identificacion" classNameName="form-label">
            Identificación
          </label>
          <input type="text" classNameName="form-control" id="identificacion" />
        </div>
      </div>
      <div classNameName="col-md-6">
        <div classNameName="mb-3">
          <label htmlFor="email" classNameName="form-label">
            Email
          </label>
          <input type="email" classNameName="form-control" id="email" />
        </div>
        <div classNameName="mb-3">
          <label htmlFor="fechaReserva" classNameName="form-label">
            Fecha de la Reserva
          </label>
          <input type="date" classNameName="form-control" id="fechaReserva" />
        </div>
        <div classNameName="mb-3">
          <label htmlFor="tipoReserva" classNameName="form-label">
            Tipo de Reserva
          </label>
          <select classNameName="form-select" id="tipoReserva">
            <option value="">Seleccionar</option>
            <option value="cena">Cena</option>
            <option value="almuerzo">Almuerzo</option>
            <option value="onces">Onces</option>
            <option value="cumpleaños">Cumpleaños</option>
            <option value="ocasión especial">Ocasión Especial</option>
          </select>
        </div>
        <div classNameName="mb-3">
          <label htmlFor="cantidadPersonas" classNameName="form-label">
            Cantidad de Personas
          </label>
          <input type="number" classNameName="form-control" id="cantidadPersonas" />
        </div>
        <div classNameName="mb-3">
          <label htmlFor="observaciones" classNameName="form-label">
            Descripción y/o Observaciones
          </label>
          <textarea classNameName="form-control" id="observaciones" rows="3"></textarea>
        </div>
      </div>
    </div>
    <div classNameName="text-center">
      <button type="submit" classNameName="btn btn-success">
        Editar Reserva
      </button>
      <button type="submit" classNameName="btn btn-primary m-4">
        Confirmar Reserva
      </button>
    </div>
  </form>
 </div>*/
}
