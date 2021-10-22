let dbIngredientes = require('../ingredientes.js');

IngredienteModel = {};

//DEFINO FUNCIONES
IngredienteModel.findAll = () => dbIngredientes;

//EXPORTO
module.exports = IngredienteModel;