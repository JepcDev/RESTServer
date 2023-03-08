
const { response } = require('express');


//es o son funciones comun y corriente
const usuarioGet = (req, res = response) => {
  // usualmente lo que se manda es un objeto en este caso json
  // res.render('Hello World');
  res.status(200).json({
    msg: 'get API - controlador'
  });
}

const usuarioPut = (req, res = response) => {
  // usualmente lo que se manda es un objeto en este caso json
  // res.render('Hello World');
  res.json({
    msg: 'put API - controlador'
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