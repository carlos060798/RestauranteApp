function FormReserva() {
    return (<>
    <div className="container my-5">
  <h1 className="text-center">Formulario de Registro</h1>
  <form>
    <div className="row">
      <div className="col-md-6">
        <div className="mb-3">
          <label htmlFor="nombres" className="form-label">
            Nombres
          </label>
          <input type="text" className="form-control" id="nombres" />
        </div>
        <div className="mb-3">
          <label htmlFor="apellidos" className="form-label">
            Apellidos
          </label>
          <input type="text" className="form-control" id="apellidos" />
        </div>
        <div className="mb-3">
          <label htmlFor="tipoDocumento" className="form-label">
            Tipo de Documento
          </label>
          <select className="form-select" id="tipoDocumento">
            <option value="">Seleccionar</option>
            <option value="cc">Cédula de Ciudadanía</option>
            <option value="ti">Tarjeta de Identidad</option>
            <option value="ce">Cédula de Extranjería</option>
            <option value="pp">Pasaporte</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="identificacion" className="form-label">
            Identificación
          </label>
          <input type="text" className="form-control" id="identificacion" />
        </div>
      </div>
      <div className="col-md-6">
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input type="email" className="form-control" id="email" />
        </div>
        <div className="mb-3">
          <label htmlFor="fechaReserva" className="form-label">
            Fecha de la Reserva
          </label>
          <input type="date" className="form-control" id="fechaReserva" />
        </div>
        <div className="mb-3">
          <label htmlFor="tipoReserva" className="form-label">
            Tipo de Reserva
          </label>
          <select className="form-select" id="tipoReserva">
            <option value="">Seleccionar</option>
            <option value="cena">Cena</option>
            <option value="almuerzo">Almuerzo</option>
            <option value="onces">Onces</option>
            <option value="cumpleaños">Cumpleaños</option>
            <option value="ocasión especial">Ocasión Especial</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="cantidadPersonas" className="form-label">
            Cantidad de Personas
          </label>
          <input type="number" className="form-control" id="cantidadPersonas" />
        </div>
        <div className="mb-3">
          <label htmlFor="observaciones" className="form-label">
            Descripción y/o Observaciones
          </label>
          <textarea className="form-control" id="observaciones" rows="3"></textarea>
        </div>
      </div>
    </div>
    <div className="text-center">
      <button type="submit" className="btn btn-primary">
        Registrarse
      </button>
    </div>
  </form>
</div>
    </>  );
}

export default FormReserva;