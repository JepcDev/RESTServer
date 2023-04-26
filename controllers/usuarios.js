
const { response, request } = require('express');
const bcryptjs = require('bcryptjs');

// se pone en mayusculas U eso es por que esto me va a pertimir crearme instancias de mi modelo
// es un estandar
const Usuario = require('../models/usuarios');

// DEV GET
//es o son funciones comun y corriente
// aqui es donde insertaremos en la base de datos por que aqui se va a recibir la informacion y es el manejador de una ruta post
const usuarioGet = async(req = request, res = response) => {

  // captura los query params
  // const queryParams = req.query;
  //postman http://localhost:8080/api/usuarios?q=hola&nombre=jepc&apikey=1234567
  //postman http://localhost:8080/api/usuarios?q=hola&nombre=jepc&page=10&limit=5 //paginacion
  // const {q,nombre= 'no name',apikey,page = 1, limit} = req.query; //valores por defecto por si el usuario no manda estos valores en los query o paramas
  // const {q,nombre,apikey} = req.query;
  // argumentos opcinales que vienen por el querty
  const { limite = 5, desde = 0  } = req.query;//limite = son los registros que se van a mostrar, desde = desde que requistro quiero que se muestren
  const query = {state: true}; //query o consulta que sirve para restringir la visualizacion de los usuarios con el "estado:true"

  // el await es un codigo bloqueante es decir si no se termina de ejecutar esta instruccion no puede continuar con la proxima. es decor va a esperar la respuesta de esta instruccion que trae una respuesta de la base de datos
  // promesas
  // const usuarios = await Usuario.find(query)
  //   .skip(Number(desde))
  //   .limit(Number(limite));
  //   // .limit(2);
  // promesas
  // const total = await Usuario.countDocuments(query);

  // Promise.all() me permite enviar un arreglo con todas las promesas que quiero que se ejecuten
  // const resp = await Promise.all([
  // destructuracion de arreglos
  const [total, usuarios] = await Promise.all([
    Usuario.count(query),
    Usuario.find(query)
      .skip(Number(desde))
      .limit(Number(limite))
  ]);
  // usualmente lo que se manda es un objeto en este caso json
  // res.render('Hello World');
  // res.status(200).json({
  // res.json({
  //   msg: 'get API - controlador',
  //   q,
  //   nombre,
  //   apikey,
  //   page,
  //   limit
  // });
  // se debe manejar con await por que si no se tubiera la respuesta de los anteriores instuciones o consulta a la base de datos no tendriamos respuesta para la peticiones
  // el resultado se imprime en la respuesta
  res.json({
    total,
    usuarios
  });
}

// DEV PUT
const usuarioPut = async(req, res = response) => {
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
  // vamos a desestructurar informacion que viene en la "request.body" voy a extraer todo lo que no necesito o lo que voy a ocupar manipular o lo que no necesito que se grabe
  // ...resto es el resto de la informacion que viene en el "request.body" es lo unico que se cambiara, los demas parametros se ignoran o excluyen o no se toman en cuenta a la hora de hacerla insercion en la db
  const {_id, password, google,email, ...resto} = req.body;
  //TODO validar contra base de datos
  if (password) {
    //encriptar la contraseña
    const salt = bcryptjs.genSaltSync();
    resto.password = bcryptjs.hashSync(password, salt);
  }
  const usuario = await Usuario.findByIdAndUpdate(id, resto);
  // res.json usualmente lo que se manda es un objeto en este caso json
  // res.render('Hello World');
  // res.json({
  //   msg: 'put API - controlador',
  //   // id
  //   usuario
  // });
  res.json(usuario);
}

// Validar todos los endpoints de la manera mas minusiosa posible
const usuarioPost = async(req, res = response) => {

  // crear un middlewarepara manejar esto y no tener que estar copiando y pegando en todos lados donde se necesite
  // const errors = validationResult(req);
  // if (!errors.isEmpty()) {
  //   return res.status(400).json(errors);
  // }
  // usualmente lo que se manda es un objeto en este caso json
  // res.render('Hello World');

  //escencialmente se va a necesitar hacer una limpieza asegurarse que no haya scripts o una inyeccion de algo
  //es muy comun que se desestructure del body solo lo que se necesita
  // const { nombre, edad } = req.body;
  // toda la informacion del body se esta recibiendo en esta request req
  // const body = req.body;
  const { name, email, password, role} = req.body;
  // si se tubiera mas campos unos 1000 o mas se usaria asi y se quisiera obpener al especifico en este caso google se pondria asi
  // y el resto se mandaria como argumento al modelo Usuario
  // const { google, ...resto} = req.body;
  // const usuario = new Usuario({ resto});
  // los elementos que se reciban en el body sera enviado al modelo usuario
  // los nuevos campos que se manden en la request y como no estan definidos en el modelo nose van a grabar y mongoose lo va a ignorar por nosostros
  // const usuario = new Usuario( body );
  const usuario = new Usuario({ name, email, password, role });

  // verificar si el correo existe
  //Usuario.findOne({ correo:correo }) busca un objeto que sea igual al correo que recibo como argumento
  // const existeEmail = await Usuario.findOne({ email });
  // if (existeEmail) {
  //   return res.status(400).json({
  //     msg: 'El correo ya existe'
  //   });
  // }

  // Encriptar la contraseña, hacer el hash de la contraseña, salt es el numero de vueltas que va tener la encriptacion de la contraseña y tiene por defecto 10
  const salt = bcryptjs.genSaltSync();
  // El hash es para encriptarlo en una sola via
  usuario.password = bcryptjs.hashSync(password, salt);
  // Guardar en base de datos
  // graba en la DB , await para que espere esa grabacion aunque si esto falla actualmente va a romper o botar mi aplicasion
  await usuario.save();
  // funcionaria si fuera un objeto literal pero en cambio es un modelo de mongo
  // delete usuario.password;

  res.json({
    // msg: 'post API - controlador',
    // nombre,
    // edad
    // body
    usuario
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