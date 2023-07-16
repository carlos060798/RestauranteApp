import EditarReserva from "./Modal";

function ReservasTable() {
    return ( <>
    <div className="container my-5">
  <h1 className="text-center">Tabla de Registros</h1>
  <div className="table-responsive">
    <table className="table table-striped table-bordered">
      <thead>
        <tr>
          <th>Nombres</th>
          <th>Apellidos</th>
          <th>Documento</th>
          <th>Identificación</th>
          <th>Email</th>
          <th>Fecha</th>
          <th>Tipo</th>
          <th>Personas</th>
          <th>Descripción</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>John</td>
          <td>Doe</td>
          <td>Cédula de Ciudadanía</td>
          <td>123456789</td>
          <td>johndoe@example.com</td>
          <td>2021-12-31</td>
          <td>Cena</td>
          <td>4</td>
          <td>Observación sobre la reserva</td>
          <td>
           <EditarReserva/>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

    
    
    </> );
}

export default ReservasTable;