const router = require("express").Router();
const UserController = require("../controllers/user.controller");

router.post("/registration", UserController.registration);
router.post("/login", UserController.login);
router.get("/auth", UserController.checkAuth);
router.get("/", UserController.getUsers);
router.get("/:id", UserController.getUserById);
router.delete("/:id", UserController.deleteUser);

module.exports = router;
