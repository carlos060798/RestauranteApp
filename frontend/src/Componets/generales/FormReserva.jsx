import { useState } from "react";
import axios from 'axios';

function FormReservas() {



  const [formData, setFormData] = useState({
    nombres: "",
    apellidos: "",
    tipodocumento: "",
    identificacion: "",
    email: "",
  });
 const [DataReserva,setDataReserva]=useState({
    fecha_reserva:"",
    tipo_reserva:"",
    cantidad_personas:"",
    descripcion:""
 })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  
  };
  const handleChangeReserva = (e) => {
    const { name, value } = e.target;
    setDataReserva((prevDataReserva) => ({
      ...prevDataReserva,
      [name]: value
    }));
  
  };
  
  const handleReserva = async (e) => {
    e.preventDefault();

    try {
      // 1. Llamar a la API para crear el usuario
      const usuarioResponse = await axios.post('http://localhost:4000/api/user', formData);
      const usuarioId = usuarioResponse.data.idUser;

      // 2. Llamar a la API para crear la reserva usando el ID del usuario
      await axios.post('http://localhost:4000/api/reservas', { ...DataReserva, usuario_id: usuarioId });

      console.log('Reserva creada exitosamente');
    } catch (error) {
      console.error('Error al crear la reserva:', error);
    }
  };
  
  

    return (<>
    <div className="container my-5">
  <h1 className="text-center">Formulario de Registro</h1>
  <form onSubmit={handleReserva}>
    <div className="row">
      <div className="col-md-6">
        <div className="mb-3">
          <label htmlFor="nombres" className="form-label">
            Nombres
          </label>
          <input type="text" className="form-control" name="nombres"
                  value={formData.nombres}
                  onChange={handleChange}/> 
        </div>
        <div className="mb-3">
          <label htmlFor="apellidos" className="form-label">
            Apellidos
          </label>
          <input type="text" className="form-control"   name="apellidos"
                  value={formData.apellidos}
                  onChange={handleChange}/>
        </div>
        <div className="mb-3">
          <label htmlFor="tipodocumento" className="form-label">
            Tipo de Documento
          </label>
          <select className="form-select" name="tipodocumento"
                  value={formData.tipodocumento}
                  onChange={handleChange}>
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
          <input type="text" className="form-control" name="identificacion"
        
          value={formData.identificacion}
          onChange={handleChange}/>
        </div>
      </div>
      <div className="col-md-6">
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input type="email" className="form-control" name="email"
                  value={formData.email}
                  onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="fecha_reserva" className="form-label">
            Fecha de la Reserva
          </label>
          <input type="date" className="form-control" name="fecha_reserva" 
          value={DataReserva.fecha_reserva}
          onChange={handleChangeReserva }/>
        </div>
        <div className="mb-3">
          <label htmlFor="tipo_reserva" className="form-label">
            Tipo de Reserva
          </label>
          <select className="form-select" name="tipo_reserva"   value={DataReserva.tipo_reserva}
          onChange={handleChangeReserva}>
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
          <input type="number" className="form-control" name="cantidad_personas"
          value={DataReserva.cantidad_personas}
          onChange={handleChangeReserva} />
           
        </div>
        <div className="mb-3">
          <label htmlFor="observaciones" className="form-label">
            Descripción y/o Observaciones
          </label>
          <textarea className="form-control" name="observaciones" rows="3"
           value={DataReserva.observaciones}
           onChange={handleChangeReserva}></textarea>
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

export default FormReservas;