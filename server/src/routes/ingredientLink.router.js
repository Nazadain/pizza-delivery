const router = require("express").Router();
const ingredientLinkController = require("../controllers/ingredientLink.controller");
const { checkAuth } = require("../controllers/user.controller");
const authMiddleware = require("../middlewares/auth.middleware");
const checkRoleMiddleware = require("../middlewares/checkRole.middleware");

router.post("/", authMiddleware, ingredientLinkController.createLink);
router.get("/", ingredientLinkController.getLinks);
router.get("/:id", ingredientLinkController.getLinksByTableItemId);
router.delete(
  "/:id",
  checkAuth,
  checkRoleMiddleware("ADMIN", "MANAGER"),
  ingredientLinkController.deleteLink
);

module.exports = router;
