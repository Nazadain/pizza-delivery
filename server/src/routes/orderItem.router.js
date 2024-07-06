const router = require("express").Router();
const OrderItemController = require("../controllers/orderItem.controller");
const authMiddleware = require("../middlewares/auth.middleware");
const checkRoleMiddleware = require("../middlewares/checkRole.middleware");

router.post("/", OrderItemController.createOrderItem);
router.get("/", OrderItemController.getOrderItems);
router.get("/:id", OrderItemController.getOrderItemById);
router.delete(
  "/:id",
  authMiddleware,
  checkRoleMiddleware("ADMIN", "MANAGER"),
  OrderItemController.deleteOrderItem
);

module.exports = router;
