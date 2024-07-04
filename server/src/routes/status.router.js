const router = require("express").Router();
const StatusController = require("../controllers/status.controller");

router.post("/", StatusController.createStatus);
router.get("/", StatusController.getStatuses);
router.get("/:id", StatusController.getStatusById);
router.delete("/:id", StatusController.deleteStatus);

module.exports = router;
