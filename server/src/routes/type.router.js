const router = require("express").Router();
const TypeController = require("../controllers/type.controller");
const checkAuth = require("../middlewares/auth.middleware");
const checkRole = require("../middlewares/checkRole.middleware");

router.post("/", [checkAuth, checkRole("admin")], TypeController.createType);
router.get("/", TypeController.getTypes);
router.get("/:id", TypeController.getTypeById);
router.delete("/:id", checkRole("admin"), TypeController.deleteType);

module.exports = router;
