const mysql = require('mysql');

// Configuración de la conexión a MySQL
const connection = mysql.createConnection({
    host: 'mysql_db',
    user: 'root',
    password: 'root_password',
    database: 'registro_academico',
    allowPublicKeyRetrieval: true
});

// Conectar a la base de datos
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL database');
});

module.exports = connection;
