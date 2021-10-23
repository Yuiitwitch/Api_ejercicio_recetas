const expresss = require ("express");
const router = expresss.Router();

//IMPORTO MODELO DE DATOS
const IngredienteController = require ("../controllers/IngredienteController.js");

//CRUD
router.get("/", IngredienteController.obtenerTodos);

router.get("/:id", IngredienteController.obtenerPorId);

<<<<<<< HEAD
router.post("/", IngredienteController.agregarRegistro);

router.put("/:id", IngredienteController.actualizarRegistro);

router.delete("/:id", IngredienteController.borrarRegistro);
=======
>>>>>>> f02cc1e892b3e5e262754efd6c59c98ddf3dff2b

module.exports = router;