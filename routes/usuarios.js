// rutas relacionadas con el usuario
// Router me permite crearme una llamda de mi router
const {Router} = require('express');

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
router.put('/', usuarioPut );
// router.put('/', (req, res) => {
//   // usualmente lo que se manda es un objeto en este caso json
//   // res.render('Hello World');
//   res.json({
//     msg: 'put API'
//   });
// });

//DEV POST
// mayormente se usa para crear nuevos recursos
router.post('/', usuarioPost);
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