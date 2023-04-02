// rutas relacionadas con el usuario
// Router me permite crearme una llamda de mi router
const {Router} = require('express');
const { check } = require('express-validator');

const { usuarioGet, usuarioPut, usuarioPost, usuarioDelete, usuarioPatch } = require('../controllers/usuarios');

const router = Router();

// Estos routes solo deberian tener las rutas y tambien la proteccion de las rutas

//DEV GET
router.get('/', usuarioGet );
// router.get('/', (req, res) => {
//   // usualmente lo que se manda es un objeto en este caso json
//   // res.render('Hello World');
//   res.status(404).json({
//     msg: 'get API'
//   });
// });
// usaurioGet no estamos ejecuntando la funcion "usaurioGet()" sino solo mandando la referencia

//DEV PUT
// capturando parametros en la peticion
// router.put('/', usuarioPut );
// este :id ahora ya esta configurado en express inscluso express ya lo parsea y lo entrega en una propiedad del objeto request 
// postman- PUT -> http://localhost:8080/api/usuarios/10
//query params ,son considerados opcionales ?q=hola&nombre=fernando&apikey=1234567
//http://localhost:8080/api/usuarios?q=hola&nombre=fernando&apikey=1234567

router.put('/:id', usuarioPut );
//lo que esta despues de la primer "," se lo movio a controllers
// router.put('/', (req, res) => {
//   // usualmente lo que se manda es un objeto en este caso json
//   // res.render('Hello World');
//   res.json({
//     msg: 'put API'
//   });
// });

//DEV POST
// mayormente se usa para crear nuevos recursos
// antes de que se ejecute usuarioPost yo puedo hacer las validaciones y si se pasa todas las validaciones recien llamo a usuarioPost
// si algo falla en algun middleware no se dispara la ruta
// check es un middleware en el cual puedo especificar que campo del body necesito revisar
// junta todos los errores y cuando se ejecute el usuarioPost o la ruta o el controlador usuarioPost podemos ver los errores
router.post('/',[
  check('email', 'El correo no es valido').isEmail(),
], usuarioPost);
// router.post('/', (req, res) => {
//   // usualmente lo que se manda es un objeto en este caso json
//   // res.render('Hello World');
//   res.json({
//     msg: 'post API'
//   });
// });

//DEV DELETE
router.delete('/', usuarioDelete );
// router.delete('/', (req, res) => {
//   // usualmente lo que se manda es un objeto en este caso json
//   // res.render('Hello World');
//   res.json({
//     msg: 'delete API'
//   });
// });

//DEV PATCH
router.patch('/', usuarioPatch);
// router.patch('/', (req, res) => {
//   // usualmente lo que se manda es un objeto en este caso json
//   // res.render('Hello World');
//   res.json({
//     msg: 'patch API'
//   });
// });

module.exports = router;