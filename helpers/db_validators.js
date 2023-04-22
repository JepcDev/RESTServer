const { default: mongoose } = require('mongoose');
const Role = require('../models/role');
const Usuario = require('../models/usuarios');

const esRoleValido = async(role='') => {
  const existeRol = await Role.findOne({role});
  if(!existeRol){
    throw new Error(`El rol ${role} no esta registrado en la DB`);
  }
}

const emailExiste = async(email='') => {
  const existeEmail = await Usuario.findOne({email});

  if (existeEmail) {
    throw new Error(`El email: ${email}, ya está registrado`);
  }
  // if (existeEmail) {
  //   return res.status(400).json({
  //     msg: 'El correo ya existe'
  //   });
  // }
}

const existeUsuarioPorId = async( id ) => {
  // const existeUsuario = await Usuario.findById({id:id});
  // const existeUsuario = await Usuario.findById(id);
// if (!mongoose.Types.ObjectId.isValid(id)) {
//   throw new Error(`This isn't a valid Mongoose ID`);
// }

//   const existeUsuario = await Usuario.findById({_id:id});//devuelve true si encuentra un id con el mismo valor en la db
//   if(!existeUsuario){
//     throw new Error(`El id: ${id} no existe`);
//   }
  if (mongoose.Types.ObjectId.isValid(id)) {
    const existId = await Usuario.findById(id);
    if (!existId) {
      throw new Error(`El id  ${id}  no existe en la BD`);
    }
  }else{
    throw new Error(`El id ${id} no es válido`);
  }
}

module.exports = {
  esRoleValido,
  emailExiste,
  existeUsuarioPorId
};