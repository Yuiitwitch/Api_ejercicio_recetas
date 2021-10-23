let dbIngredientes = require('../ingredientes.js');

IngredienteModel = {};

//DEFINO FUNCIONES
IngredienteModel.todos = () => dbIngredientes;

IngredienteModel.porId = (id) => dbIngredientes.find(ingrediente => ingrediente.id == id);

IngredienteModel.nuevoIngrediente = (objeto) =>{
    dbIngredientes.push(objeto);
    return `Se ha añadido un registro a la base de datos.`
};

IngredienteModel.cambiarIngrediente = (id, objeto) =>{
    let ingredientesFiltrados = dbIngredientes.filter(ingrediente => ingrediente.id != id);
    ingredientesFiltrados.push(objeto);
    dbIngredientes = ingredientesFiltrados;
    return `Se ha modificado el registro ${id}.`
};

IngredienteModel.eliminarIngrediente = (id) =>{
    let ingredientesFiltrados = dbIngredientes.filter(ingrediente => ingrediente.id != id);
    dbIngredientes = ingredientesFiltrados;
    return `Se ha eliminado el registro ${id} de la base de datos.`
};

//EXPORTO
module.exports = IngredienteModel;