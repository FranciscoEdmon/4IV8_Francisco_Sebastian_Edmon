const express = require('express');
const path = require('path');
const mysql = require('mysql2');

const app = express();
const PORT = process.env.PORT || 3000;

// Configuración del pool de la base de datos
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'R9m!xT2#qL7v',
    database: 'pnt_crud',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});
const database = pool.promise();

// 1. Aqui reemplazo mi función "leerBody": Procesa automáticamente el cuerpo de las peticiones JSON
app.use(express.json());

// 2. Reemplazo la función "servirArchivoEstatico" y al objeto "mimeTypes":
app.use(express.static(path.join(__dirname, '../public')));
app.get('/api/usuarios', async (req, res) => {
    console.log(`[${new Date().toLocaleTimeString()}] GET /api/usuarios`);
    try {
        const [usuarios] = await database.query('SELECT * FROM usuarios');
        res.json(usuarios); 
    } catch (error) {
        console.error('Error al obtener usuarios:', error);
        res.status(500).json({ mensaje: 'Error interno del servidor' });
    }
});
//Aqui inicializo el servidor
app.listen(PORT, () => {
    console.log('Servidor inicializado en el puerto ' + PORT);
    console.log('Para salir presiona Ctrl + C');
});