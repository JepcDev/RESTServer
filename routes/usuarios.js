// rutas relacionadas con el usuario
// Router me permite crearme una llamda de mi router
const {Router} = require('express');
const { check } = require('express-validator');
// const Role = require('../models/role');

const { validateFields } = require('../middlewares/validate-fields');
const { esRoleValido, emailExiste } = require('../helpers/db_validators');

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
// su es solo 1 middleware se pone sin el []
router.post('/',[
  // El check va preparando los errores esta creanod en la request todos los errores que que estos middleware que voy a ir poniendo los va almacenando hay de tal manera que cuando lleguemos al usuariopost puedo confirmar eso
  // check('campo que se va a evaluar', 'mensaj de error')
  check('name', 'El nombre es obligatorio').not().isEmpty(),
  check('password', 'El password debe contener mas de 6 letras').isLength({min:6}),
  check('email', 'El correo no es valido').isEmail(),
  check('email').custom(emailExiste),
  // check('role', 'No es un rol valido').isIn(['ADMIN_ROLE', 'USER_ROLE']),
  // con el custom le decimos que va ser una verficacion personalizada
  // Custom recibe como argumento el valor que estoy evaluando del body "rol"
  // check('role').custom( async(role='')=>{
  //   const existeRol = await Role.findOne({role});
  //   if(!existeRol){
  //     throw new Error(`El rol ${role} no existe`)
  //   }
  // }),
  // check('role').custom((role) => esRoleValido(role)),
  // (role) => esRoleValido(role) cuando se tenga una funcion o un callback cuyo primer argumento "esRoleValido(role)" es el mismo argumento que estamos recibiendo "(role) =>" podemos obviar esta parte mandar unicamente la referencia a la funcion "esRoleValido" y auromaticamente el primer argumento que este emitiendo el custom va ser el 1er argumento que se le va a enviar a la funcion "esRoleValido"
  check('role').custom( esRoleValido),
  // validateFields este middleware se pone despues de que se hizo todas las validaciones del check porque cunado ya tengo todas las validaciones del check echas quiero ejecutar el middleware que va a rebizar los errores de cada uno de estos cheks
  // si este middleware pasa entonces se ejecuta el controlador
  validateFields
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