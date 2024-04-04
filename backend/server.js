const express = require('express');
const db = require('./database'); // Importar la configuración de la conexión a la base de datos

const app = express();
const PORT = process.env.PORT || 5000;

const userController = require('./controllers/userController');

// Rutas
app.get('/users', userController.getAllUsers);


// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`El servidor está corriendo en el puerto ${PORT}`);
});