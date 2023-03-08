
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
  res.json({
    msg: 'post API - controlador'
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

module.exports = {
  usuarioGet,
  usuarioPut,
  usuarioPost,
  usuarioDelete,
  usuarioPatch
}