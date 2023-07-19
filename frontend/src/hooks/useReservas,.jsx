import { useState } from "react";
import axios from "axios";
function useResevas() {
    const [formData, setFormData] = useState({
        nombres: "",
        apellidos: "",
        tipodocumento: "",
        identificacion: "",
        email: "",
      });
    
      const [DataReserva, setDataReserva] = useState({
        fecha_reserva: "",
        tipo_reserva: "",
        cantidad_personas: "",
        observaciones: "",
      });
    
      const [alerta, setAlerta] = useState({}); // Estado para mostrar la alerta
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value,
        }));
      };
    
      const handleChangeReserva = (e) => {
        const { name, value } = e.target;
        setDataReserva((prevDataReserva) => ({
          ...prevDataReserva,
          [name]: value,
        }));
      };
    
      const handleReserva = async (e) => {
        e.preventDefault();
    
        // Validar que no falten campos
        if (
          [
            formData.nombres,
            formData.apellidos,
            formData.tipodocumento,
            formData.identificacion,
            formData.email,
            DataReserva.fecha_reserva,
            DataReserva.tipo_reserva,
            DataReserva.cantidad_personas,
          ].includes("")
        ) {
          setAlerta({
            msg: "Todos los campos son obligatorios",
            error: true,
          });
          return;
        }
    
        try {
          // 1. Llamar a la API para crear el usuario
          const usuarioResponse = await axios.post(
            "http://localhost:4000/user",
            formData
          );
          const usuarioId = usuarioResponse.data.idUsuer;
    
          // 2. Llamar a la API para crear la reserva usando el ID del usuario
          await axios.post(
            `http://localhost:4000/reservas/${usuarioId}`,
            DataReserva
          );
    
          console.log("Reserva creada exitosamente");
          // Mostrar alerta de éxito
          setAlerta({
            msg: "Reserva creada exitosamente",
            error: false,
          });
    
          // Limpiar formulario
          setFormData({
            nombres: "",
            apellidos: "",
            tipodocumento: "",
            identificacion: "",
            email: "",
          });
          setDataReserva({
            fecha_reserva: "",
            tipo_reserva: "",
            cantidad_personas: "",
            observaciones: "",
          });
        } catch (error) {
          console.error("Error al crear la reserva:", error);
          // Mostrar alerta de error
          setAlerta({
            msg: "Error al crear la reserva",
            error: true,
          });
        }
      };
    
    return {
        handleReserva,
        handleChange,
        handleChangeReserva,
        formData,
        DataReserva,
        alerta
        
    };
}

export default useResevas;