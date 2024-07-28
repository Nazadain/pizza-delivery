const router = require("express").Router();
const typeRouter = require("./type.router");
const userRouter = require("./user.router");
const statusRouter = require("./status.router");
const orderRouter = require("./order.router");
const orderItemRouter = require("./orderItem.router");
const productRouter = require("./product.router");

router.use("/users", userRouter);
router.use("/types", typeRouter);
router.use("/statuses", statusRouter);
router.use("/products", productRouter);
router.use("/orders", orderRouter);
router.use("/orderItems", orderItemRouter);

module.exports = router;
