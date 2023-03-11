
const { response, request } = require('express');


//es o son funciones comun y corriente
const usuarioGet = (req = request, res = response) => {

  // captura los query params
  // const queryParams = req.query;
  //postman http://localhost:8080/api/usuarios?q=hola&nombre=jepc&apikey=1234567
  //postman http://localhost:8080/api/usuarios?q=hola&nombre=jepc&page=10&limit=5 //paginacion
  // const {q,nombre= 'no name',apik,page = 1, limit} = req.query; //valores por defecto por si el usuario no manda estos valores en los query o paramas
  const {q,nombre,apikey} = req.query;

  // usualmente lo que se manda es un objeto en este caso json
  // res.render('Hello World');
  // res.status(200).json({
  res.json({
    msg: 'get API - controlador',
    q,
    nombre,
    apikey
  });
}

const usuarioPut = (req, res = response) => {
  //esto captura el id o parametro que esta viniendo o mandando el usuario en los parametros
  // const id = req.params.id; postman- PUT -> http://localhost:8080/api/usuarios/10
  // body/json esto es lo que se envia en el cuerpo de la peticion
  // {
  //   "nombre": "Jepc",
  //   "edad": 27,
  //   "id": "123",
  //   "apellido": "pc"
  // }
  const { id } = req.params;
  // usualmente lo que se manda es un objeto en este caso json
  // res.render('Hello World');
  res.json({
    msg: 'put API - controlador',
    id
  });
}

const usuarioPost = (req, res = response) => {
  // usualmente lo que se manda es un objeto en este caso json
  // res.render('Hello World');

  //escencialmente se va a necesitar hacer una limpieza asegurarse que no haya scripts o una inyeccion de algo
  //es muy comun que se desestructure del body solo lo que se necesita
  const { nombre, edad } = req.body;
  res.json({
    msg: 'post API - controlador',
    nombre,
    edad
    // body
  });
}

const usuarioDelete = (req, res = response) => {
  // usualmente lo que se manda es un objeto en este caso json
  // res.render('Hello World');
  res.json({
    msg: 'delete API - controlador'
  });
}

const usuarioPatch = (req, res = response) => {
  // usualmente lo que se manda es un objeto en este caso json
  // res.render('Hello World');
  res.json({
    msg: 'patch API - controlador'
  });
}

// http://localhost:8080/api/usuarios/10?q=ahora //hay que obtener esos argumentos generalmente se los envian en el put la pregunta es como capturarlos
module.exports = {
  usuarioGet,
  usuarioPut,
  usuarioPost,
  usuarioDelete,
  usuarioPatch
}