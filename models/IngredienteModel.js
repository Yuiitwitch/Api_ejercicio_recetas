let dbIngredientes = require('../ingredientes.js');

IngredienteModel = {};

//DEFINO FUNCIONES

IngredienteModel.todos = () => dbIngredientes;

IngredienteModel.porId = (id) => dbIngredientes.find(ingrediente => ingrediente.id == id); 

//EXPORTO
module.exports = IngredienteModel;