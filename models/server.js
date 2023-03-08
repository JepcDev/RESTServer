
const express = require('express');

const cors = require('cors');

class Server {

  // En el constructor es donde se declaran las propiedades
  constructor() {
    //Lo que se hace aqui es crearme en mi servidor  una instancia que cuando se lanze el servidor se crea la aplicasion de express como una propiedad de la clase de mi servidor
    this.app = express();
    this.port = process.env.PORT;
    this.usuariosPath = '/api/usuarios';

    //Middlewares no son mas que funciones que van a añadirle otra funcionalidad a mi webserver es un metodo o funcion  que siempre se va a ejecutarse cuando levantemos nuestro servidor
    this.middlewares();

    //Rutas de mi aplicacion
    //esto dispara el metodo routes y eso configura mis rutas
    this.routes();
  }

  middlewares() {

    // CORS
    this.app.use( cors() );

    //Lectura y parse del body
    //cualquier informacion que venga de un post put delete la va intentar serializar a un formato json
    this.app.use( express.json() );

    // Directorio publico
    this.app.use( express.static('public') );

  }

  routes() {
    // get cuando se solicita mediante una peticion get '/api' a ese path se envia el hello world
    // this.app.get('/api', (req, res) => {
    //   // usualmente lo que se manda es un objeto en este caso json
    //   // res.render('Hello World');
    //   res.status(404).json({
    //     msg: 'get API'
    //   });
    // });

    // this.app.put('/api', (req, res) => {
    //   // usualmente lo que se manda es un objeto en este caso json
    //   // res.render('Hello World');
    //   res.json({
    //     msg: 'put API'
    //   });
    // });

    // // mayormente se usa para crear nuevos recursos
    // this.app.post('/api', (req, res) => {
    //   // usualmente lo que se manda es un objeto en este caso json
    //   // res.render('Hello World');
    //   res.json({
    //     msg: 'post API'
    //   });
    // });

    // this.app.delete('/api', (req, res) => {
    //   // usualmente lo que se manda es un objeto en este caso json
    //   // res.render('Hello World');
    //   res.json({
    //     msg: 'delete API'
    //   });
    // });

    // this.app.patch('/api', (req, res) => {
    //   // usualmente lo que se manda es un objeto en este caso json
    //   // res.render('Hello World');
    //   res.json({
    //     msg: 'patch API'
    //   });
    // });

    // this.app.use('/api/usuarios', require('../routes/user'));
    this.app.use(this.usuariosPath, require('../routes/usuarios'));
  }

  listen() {
    this.app.listen(this.port, ()=> {
      console.log('Servidor corriendo en el puerto: ', this.port);
    });
  }

}

module.exports = Server;