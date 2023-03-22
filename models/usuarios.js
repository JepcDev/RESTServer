// mediante un modelo se haga toda la iteraccion contra nuestra collecion donde almacenaremos cada uno de nuestros usuarios de la app
// como va lucir nuestra informacion en la base de datos
// {
//   nombre: 'asd',
//   correo: 'asd@gmail.com',
//   password: '1234', //encriptado
//   rol: '1231231',
//   estado: false, //no se elimanara de la base de datos solo se ponda false como inactivo
//   google: false//si el usuario fue creado por google true y si fue creado por mi sistema de autencacion false
// }
// mongo a diferencia de una base de datos relacional se graba en objetos como se ve arriba(documentos) y estos documentos se graban dentro de colecciones

const { Schema, model } = require('mongoose');

// esto es un objeto literal
const UsuarioSchema = Schema({
  name: {
    type: String,
    // la 1er posicion es de si es requerido y la 2da es un mensaje de error en caso de que no sea enviado
    // aunque vamos hacer nuestra propias validaciones por que no se quiere llegar a la BD con informacion herronea , que la base trabaje con informacion veridica
    required: [true, 'El nombre es obligatorio']
  },
  email: {
    type: String,
    required: [true, 'El correo es obligatorio'],
    unique: true,//mongo no va permitir insertar correos duplicados
  },
  password: {
    type: String,
    required: [true, 'La contraseña es obligatoria'],
  },
  img: {
    type: String,
  },
  role: {
    type: String,
    required: true,
    enum: ['ADMIN_ROLE', 'USER_ROLE'],///valida que el rol solo sea de estos dos tipos
  },
  state: {
    type: Boolean,
    default: true
  },
  google: {
    type: Boolean,
    default: false
  },
});


// pide el nombre de no solo del modelo que esto ayudara para ponerle el nombre a la misma coleccion
module.exports = model( 'Usuarios', UsuarioSchema );