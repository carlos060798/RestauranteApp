function Alerta({ alerta }) {
  return (
    <>
      <div
        className={`alert ${
          alerta.error ? "alert-danger" : "alert-primary"
        } text-center p-3 rounded-xl uppercase text-white text-center font-bold text-sm mb-10 mt-2 col-md-8 col-sm-12 mx-auto`}
        role="alert"
        style={{
          backgroundColor: alerta.error ? "#ff0000" : "#007bff",
          fontSize: "1.2rem",
        }}
      >
        {alerta.msg}
      </div>
     
    </>
  );
}

export default Alerta;

/*
  <div
          className={`alert ${alerta.error ? 'alert-danger' : 'alert-primary'} text-center p-3 rounded-xl uppercase text-white font-bold text-sm mb-10`}
          role="alert"
        >
          {alerta.msg}
        </div>

          <div
        className={`alert ${
          alerta.error ? "alert-danger" : "alert-primary"
        } text-center p-3 rounded-xl uppercase text-white text-center font-bold text-sm mb-10 mt-2`}
        role="alert"
        style={{
          backgroundColor: alerta.error ? "#ff0000" : "#007bff",
          fontSize: "0.9rem",
        }}
      >
        {alerta.msg}
      </div> 
*/
