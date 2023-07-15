const express = require('express');
const bodyParser = require('body-parser');
const reservasRoutes = require('./routes/reservasRoutes');

const app = express();

// Configuración de middleware
app.use(bodyParser.json());

// Rutas
app.use('/api', reservasRoutes);

// Puerto de escucha del servidor
const port = 4000;
app.listen(port, () => {
  console.log(`Servidor en ejecución en el puerto ${port}`);
});