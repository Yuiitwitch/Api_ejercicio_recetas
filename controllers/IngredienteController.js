const ingredientes = require("../models/IngredienteModel.js");

const IngredienteController = {};

IngredienteController.obtenerTodos =  (req, res) =>{
    res.json(ingredientes.todos());
};

IngredienteController.obtenerPorId =  (req, res) =>{
    res.json(ingredientes.porId(req.params.id));
<<<<<<< HEAD
};

IngredienteController.agregarRegistro =  (req, res) =>{
    let id = req.body.id;
    let nombre = req.body.Nombre;
    let nuevoIngrediente = {id, nombre};
    res.json(ingredientes.nuevoIngrediente(nuevoIngrediente));
};

IngredienteController.actualizarRegistro = (req, res) =>{
    let id = req.params.id;
    let body = req.body;
    let ingredienteActualizado = {id, ...body};
    res.json(ingredientes.cambiarIngrediente(id, ingredienteActualizado));
};

IngredienteController.borrarRegistro = (req, res) =>{
    let id = req.params.id;
    res.json(ingredientes.eliminarIngrediente(id));
}

=======
  
>>>>>>> f02cc1e892b3e5e262754efd6c59c98ddf3dff2b
module.exports = IngredienteController;