import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EditarReserva from './Modal';

function ReservasTable() {
  const [usuariosConReservas, setUsuariosConReservas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Obtener los datos de usuarios
        const usuariosResponse = await axios.get('http://localhost:4000/user');
        const usuarios = usuariosResponse.data.usuarios;

        // Obtener las reservas para cada usuario
        const usuariosConReservas = await Promise.all(
          usuarios.map(async (usuario) => {
            const reservasResponse = await axios.get(`http://localhost:4000/reservas/${usuario.id}`);
            const reserva = reservasResponse.data.reserva;
            return { ...usuario, reserva };
          })
        );

        // Aplanar el array bidimensional a un solo objeto
        const aplanado = usuariosConReservas.reduce((acc, usuario) => {
          return { ...acc, [usuario.id]: usuario };
        }, {});

        setUsuariosConReservas(aplanado);
        setIsLoading(false);
      } catch (error) {
        console.error('Error al obtener los datos:', error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
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
                Object.values(usuariosConReservas).map((usuario) => (
                  <tr key={usuario.id}>
                    <td>{usuario.nombres}</td>
                    <td>{usuario.apellidos}</td>
                    <td>{usuario.tipodocumento}</td>
                    <td>{usuario.identificacion}</td>
                    <td>{usuario.email}</td>
                    <td>{usuario.reserva ? usuario.reserva.fecha_reserva : ''}</td>
                    <td>{usuario.reserva ? usuario.reserva.tipo_reserva : ''}</td>
                    <td>{usuario.reserva ? usuario.reserva.cantidad_personas : ''}</td>
                    <td>{usuario.reserva ? usuario.reserva.observaciones : ''}</td>
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
    </>
  );
}

export default ReservasTable;

















