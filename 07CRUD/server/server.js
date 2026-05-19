const express = require('express');
// Importamos directamente la versión con promesas y usamos una URI de conexión (String) 
const db = require('mysql2/promise').createPool('mysql://root:R9m!xT2#qL7v@localhost/pnt_crud');
const app = express();
app.use(express.json());
// Importamos 'path' en la misma línea para ahorrar una variable
app.use(express.static(require('path').join(__dirname, '../public')));
// Ruta en una sola línea resolviendo la promesa directamente
app.get('/api/usuarios', async (req, res) => res.json((await db.query('SELECT * FROM usuarios'))[0]));
// Puerto estático sin callback
app.listen(3000);