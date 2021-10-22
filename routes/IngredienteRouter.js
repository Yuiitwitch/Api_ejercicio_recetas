const expresss = require ("express");
const router = expresss.Router();

//IMPORTO MODELO DE DATOS
const IngredienteController = require ("../controllers/IngredienteController.js");

//CRUD
router.get("/", IngredienteController.obtenerTodos);

router.get("/:id", IngredienteController.obtenerPorId);

module.exports = router;