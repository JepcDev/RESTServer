const Role = require('../models/role');

const esRoleValido = async(role='') => {
  const existeRol = await Role.findOne({role});
  if(!existeRol){
    throw new Error(`El rol ${role} no esta registrado en la DB`);
  }
}

module.exports = {
  esRoleValido
};