const { validationResult } = require('express-validator');

// como es un middleware necesita un 3er argumento que es una funcion que se llama next
// next es la funcion que tengo que llamar si este middleware pasa
const validateFields = ( req, res, next ) => {

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json(errors);//no cayo aqui
  }
  //next() en pocas palabras dice que si se llega a este punto, dice porfavor sigue con el siguiente middleware
  // y si no hay otro middleware entonces seria el controlador
  next();
}

module.exports = {
  validateFields
}