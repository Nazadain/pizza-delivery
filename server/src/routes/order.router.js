const router = require("express").Router();
const OrderController = require("../controllers/order.controller");
const authMiddleware = require("../middlewares/auth.middleware");
const checkRoleMiddleware = require("../middlewares/checkRole.middleware");

router.post("/", OrderController.createOrder);
router.get("/", OrderController.getOrders);
router.get("/:id", OrderController.getOrderById);
router.put(
  "/:id",
  authMiddleware,
  checkRoleMiddleware("ADMIN", "MANAGER", "COURIER", "KITCHEN"),
  OrderController.updateOrder
);
router.delete(
  "/:id",
  authMiddleware,
  checkRoleMiddleware("ADMIN", "MANAGER"),
  OrderController.deleteOrder
);
router.delete("/", authMiddleware, OrderController.deleteOrdersByUserId);

module.exports = router;
