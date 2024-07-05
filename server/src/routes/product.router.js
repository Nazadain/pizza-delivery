const router = require("express").Router();
const ProductController = require("../controllers/product.controller");
const fileValidation = require("../middlewares/file.middleware");
const checkAuth = require("../middlewares/auth.middleware");
const checkRole = require("../middlewares/checkRole.middleware");

router.post(
  "/",
  [checkAuth, checkRole("admin"), fileValidation],
  ProductController.createProduct
);
router.get("/", ProductController.getProducts);
router.get("/:id", ProductController.getProductById);
router.put("/:id", ProductController.updateProduct);
router.delete("/:id", ProductController.deleteProduct);

module.exports = router;
