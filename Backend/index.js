const express = require('express');
const bodyParser = require('body-parser');
const reservasRoutes = require('./routes/reservasRoutes');
const userRoutes = require('./routes/userRoutes');
const  cors= require('cors');

const app = express();
const dominiosPermitidos = ["http://localhost:3000"] // dominios permitidos para recibir peticiones


const corsOptions = {
    origin: function(origin, callback){
        if(dominiosPermitidos.indexOf(origin) !== -1){
            // El origen del request esta permitido
            callback(null, true);
        }else{
            callback(new Error('No esta permitido por CORS'))
        }
    }
}
app.use(cors({ origin: '*' }))// para que el servidor pueda recibir peticiones de otros servidores
// Configuración de middleware

app.use(bodyParser.json());

// Rutas
app.use('/api', reservasRoutes, userRoutes);

// Puerto de escucha del servidor
const port = 4000;
app.listen(port, () => {
  console.log(`Servidor en ejecución en el puerto ${port}`);
});