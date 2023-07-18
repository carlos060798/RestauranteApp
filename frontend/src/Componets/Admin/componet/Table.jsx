import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EditarReserva from './Modal';

function ReservasTable() {
  const [usuarios, setUsuarios] = useState([]);
  const [reservas, setReservas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Obtener los datos de usuarios
        const usuariosResponse = await axios.get('http://localhost:4000/user');
        console.log(usuariosResponse);
        setUsuarios(usuariosResponse.data.usuarios);


        // Obtener los datos de reservas
        const reservasResponse = await axios.get('http://localhost:4000/reservas');
        console.log(reservasResponse);
        setReservas(reservasResponse.data);

        setIsLoading(false);
      } catch (error) {
        console.error('Error al obtener los datos:', error);
        setIsLoading(false);
      }
    };
    
    fetchData();
  
  }, []);
console.log(usuarios)
  return (
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
            {isLoading ? (
              <tr>
                <td colSpan="10">Cargando...</td>
              </tr>
            ) : (
              usuarios.map((usuario, index) => (
                <tr key={index}>
                  <td>{usuario.nombres}</td>
                  <td>{usuario.apellidos}</td>
                  <td>{usuario.tipodocumento}</td>
                  <td>{usuario.identificacion}</td>
                  <td>{usuario.email}</td>
                  <td>{usuario.reserva ? usuario.reserva.fecha : ''}</td>
                  <td>{usuario.reserva ? usuario.reserva.tipo : ''}</td>
                  <td>{usuario.reserva ? usuario.reserva.personas : ''}</td>
                  <td>{usuario.reserva ? usuario.reserva.descripcion : ''}</td>
                  <td>
                    <EditarReserva />
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ReservasTable;