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

module.exports = {
  esRoleValido,
  emailExiste
};