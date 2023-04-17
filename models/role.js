// usualmente tiene el mismo nombre de la coleccion en la base de datos solo que sin la "S"
const { Schema, model } = require('mongoose');

const RoleSchema = Schema({
  // rol -> este atributo tiene que ser igual que el de la DB
  rol:{
    type: String,
    required: [true, 'El rol es obligatorio']
  }
});

module.exports = model( 'Role', RoleSchema );