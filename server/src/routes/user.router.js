const router = require("express").Router();
const UserController = require("../controllers/user.controller");
const regMiddleware = require("../middlewares/reg.middleware");
const authMiddleware = require("../middlewares/auth.middleware");

router.post("/registration", regMiddleware, UserController.registration);
router.post("/login", UserController.login);
router.get("/auth", authMiddleware, UserController.checkAuth);
router.get("/", UserController.getUsers);
router.get("/:id", UserController.getUserById);
router.delete("/:id", UserController.deleteUser);

module.exports = router;
