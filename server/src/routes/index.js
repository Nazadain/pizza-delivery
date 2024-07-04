const router = require("express").Router();
const typeRouter = require("./type.router");
const userRouter = require("./user.router");
const statusRouter = require("./status.router");
const orderRouter = require("./order.router");
const orderItemRouter = require("./orderItem.router");
const productRouter = require("./product.router");
const ingredientRouter = require("./ingredient.router");

router.use("/user", userRouter);
router.use("/type", typeRouter);
router.use("/status", statusRouter);
router.use("/product", productRouter);
router.use("/order", orderRouter);
router.use("/orderItem", orderItemRouter);
router.use("/ingredient", ingredientRouter);

module.exports = router;
