const router = require("express").Router();
const ingredientLinkController = require("../controllers/ingredientLink.controller");

router.post("/", ingredientLinkController.createLink);
router.get("/", ingredientLinkController.getLinks);
router.get("/:id", ingredientLinkController.getLinksByTableItemId);
router.delete("/:id", ingredientLinkController.deleteLink);

module.exports = router;
