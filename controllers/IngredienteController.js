const ingredientes = require("../models/IngredienteModel.js");

const IngredienteController = {};

IngredienteController.obtenerTodos =  (req, res) =>{
    res.json(ingredientes.todos());
};
IngredienteController.obtenerPorId =  (req, res) =>{
    res.json(ingredientes.porId(req.params.id));
  
module.exports = IngredienteController;