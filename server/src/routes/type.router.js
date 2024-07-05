const router = require("express").Router();
const TypeController = require("../controllers/type.controller");
const authMiddleware = require("../middlewares/auth.middleware");
const checkRoleMiddleware = require("../middlewares/checkRole.middleware");

router.post(
  "/",
  authMiddleware,
  checkRoleMiddleware("ADMIN"),
  TypeController.createType
);

router.get("/", TypeController.getTypes);

router.get("/:id", TypeController.getTypeById);

router.delete(
  "/:id",
  authMiddleware,
  checkRoleMiddleware("ADMIN"),
  TypeController.deleteType
);

module.exports = router;
