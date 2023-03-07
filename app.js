
//transformar todo lo que tenemos aqui en una clase
require('dotenv').config();

const Server = require('./models/server');

const server = new Server();

// const express = require('express')
// const app = express()

// app.get('/', function(req, res) {
//   res.send('Hello World')
// });

// app.listen(process.env.PORT, ()=> {
//   console.log('Servidor corriendo en el puerto: ', process.env.PORT);
// });
server.listen();