// db.js

const mysql = require('mysql');

// Configurar la conexión a la base de datos
const connection = mysql.createConnection({
  host: 'localhost', // Cambiar según la ubicación de tu base de datos
  user: 'perso',   // Cambiar al usuario de tu base de datos
  password: 'anger6669', // Cambiar a la contraseña de tu base de datos
  database: 'pgeei', // Cambiar al nombre de tu base de datos
});

// Conectar a la base de datos
connection.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err);
    return;
  }
  console.log('Conexión a la base de datos exitosa');
});

module.exports = connection;
