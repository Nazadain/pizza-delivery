const router = require("express").Router();
const TypeController = require("../controllers/type.controller");

router.post("/", TypeController.createType);
router.get("/", TypeController.getTypes);
router.get("/:id", TypeController.getTypeById);
router.delete("/:id", TypeController.deleteType);

module.exports = router;
