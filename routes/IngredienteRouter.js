const expresss = require ("express");
const router = expresss.Router();

//IMPORTO MODELO DE DATOS
const IngredienteController = require ("../controllers/IngredienteController.js");

//CRUD
router.get("/", IngredienteController.obtenerTodos);

router.get("/:id", IngredienteController.obtenerPorId);

router.post("/", IngredienteController.agregarRegistro);

router.put("/:id", IngredienteController.actualizarRegistro);

router.delete("/:id", IngredienteController.borrarRegistro);

module.exports = router;