import Alerta from "./Alerta"; 
import useResevas from "../../hooks/useReservas,";

function FormReservas() {
  const { handleReserva,
    handleChange,
    handleChangeReserva,
    formData,
    DataReserva,
    alerta } = useResevas();

  return (
    <>
      <div className="container my-5">
        <h1 className="text-center fw-bold text-center text-primary">Formulario de Registro</h1>
        <form onSubmit={handleReserva}>
          <div className="row">
            <div className="col-md-6">
              <div className="mb-3">
                <label htmlFor="nombres" className="form-label">
                  Nombres
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="nombres"
                  value={formData.nombres}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="apellidos" className="form-label">
                  Apellidos
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="apellidos"
                  value={formData.apellidos}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="tipodocumento" className="form-label">
                  Tipo de Documento
                </label>
                <select
                  className="form-select"
                  name="tipodocumento"
                  value={formData.tipodocumento}
                  onChange={handleChange}
                >
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
                <input
                  type="text"
                  className="form-control"
                  name="identificacion"
                  value={formData.identificacion}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="fecha_reserva" className="form-label">
                  Fecha de la Reserva
                </label>
                <input
                  type="date"
                  className="form-control"
                  name="fecha_reserva"
                  value={DataReserva.fecha_reserva}
                  onChange={handleChangeReserva}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="tipo_reserva" className="form-label">
                  Tipo de Reserva
                </label>
                <select
                  className="form-select"
                  name="tipo_reserva"
                  value={DataReserva.tipo_reserva}
                  onChange={handleChangeReserva}
                >
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
                <input
                  type="number"
                  className="form-control"
                  name="cantidad_personas"
                  value={DataReserva.cantidad_personas}
                  onChange={handleChangeReserva}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="observaciones" className="form-label">
                  Descripción y/o Observaciones
                </label>
                <textarea
                  className="form-control"
                  name="observaciones"
                  rows="3"
                  value={DataReserva.observaciones}
                  onChange={handleChangeReserva}
                ></textarea>
              </div>
            </div>
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-primary">
              Registrarse
            </button>
          </div>
        </form>
        {alerta.msg && <Alerta alerta={alerta} />}{" "}
      </div>
    </>
  );
}

export default FormReservas;


