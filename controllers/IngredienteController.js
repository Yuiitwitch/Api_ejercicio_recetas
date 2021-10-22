const ingredientes = require("../models/IngredienteModel.js");

const IngredienteController = {};

IngredienteController.getAll =  (req, res) =>{
    res.json(ingredientes.findAll());
};

module.exports = IngredienteController;