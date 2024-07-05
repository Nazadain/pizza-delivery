const router = require("express").Router();
const IngredientController = require("../controllers/ingredient.controller");
const authMiddleware = require("../middlewares/auth.middleware");
const checkRoleMiddleware = require("../middlewares/checkRole.middleware");

router.post(
  "/",
  authMiddleware,
  checkRoleMiddleware("ADMIN", "MANAGER"),
  IngredientController.createIngredient
);
router.get("/", IngredientController.getIngredients);
router.get("/:id", IngredientController.getIngredientById);
router.delete(
  "/:id",
  authMiddleware,
  checkRoleMiddleware("ADMIN", "MANAGER"),
  IngredientController.deleteIngredient
);

module.exports = router;
