
const express = require('express')

class Server {

  // En el constructor es donde se declaran las propiedades
  constructor() {
    //Lo que se hace aqui es crearme en mi servidor  una instancia que cuando se lanze el servidor se crea la aplicasion de express como una propiedad de la clase de mi servidor
    this.app = express();
    this.port = process.env.PORT;

    //Middlewares no son mas que funciones que van a añadirle otora funcionalidad a mi webserver es un metodo o funcion  que siempre se va a ejecutarse cuando levantemos nuestro servidor
    this.middlewares();

    //Rutas de mi aplicacion
    //esto dispara el metodo routes y eso configura mis rutas
    this.routes();
  }

  middlewares() {
    // Directorio publico
    this.app.use( express.static('public') );

  }

  routes() {
    this.app.get('/api', (req, res) => {
      res.render('Hello World');
    });
  }

  listen() {
    this.app.listen(this.port, ()=> {
      console.log('Servidor corriendo en el puerto: ', this.port);
    });
  }

}

module.exports = Server;