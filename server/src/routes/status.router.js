const router = require("express").Router();
const StatusController = require("../controllers/status.controller");
const authMiddleware = require("../middlewares/auth.middleware");
const checkRoleMiddleware = require("../middlewares/checkRole.middleware");

router.post(
  "/",
  authMiddleware,
  checkRoleMiddleware("ADMIN"),
  StatusController.createStatus
);

router.get("/", StatusController.getStatuses);

router.get("/:id", StatusController.getStatusById);

router.delete(
  "/:id",
  authMiddleware,
  checkRoleMiddleware("ADMIN"),
  StatusController.deleteStatus
);

module.exports = router;
