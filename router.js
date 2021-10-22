const IngredienteRouter = require("./routes/IngredienteRouter.js")
const router = require ('express').Router();

router.use("/ingredientes", IngredienteRouter);




module.exports = router;