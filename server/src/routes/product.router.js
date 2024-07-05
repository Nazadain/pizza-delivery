const router = require("express").Router();
const ProductController = require("../controllers/product.controller");
const fileValidation = require("../middlewares/file.middleware");
const authMiddleware = require("../middlewares/auth.middleware");
const checkRoleMiddleware = require("../middlewares/checkRole.middleware");

router.post(
  "/",
  authMiddleware,
  checkRoleMiddleware("ADMIN", "MANAGER"),
  fileValidation,
  ProductController.createProduct
);

router.get("/", ProductController.getProducts);

router.get("/:id", ProductController.getProductById);

router.put(
  "/:id",
  authMiddleware,
  checkRoleMiddleware("ADMIN", "MANAGER"),
  ProductController.updateProduct
);

router.delete(
  "/:id",
  authMiddleware,
  checkRoleMiddleware("ADMIN", "MANAGER"),
  ProductController.deleteProduct
);

module.exports = router;
