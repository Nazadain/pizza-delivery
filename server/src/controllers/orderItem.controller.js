const uuid = require("uuid");
const OrderItemService = require("../services/orderItem.service");

class OrderItemController {
  async createOrderItem(req, res) {
    try {
      const id = uuid.v4();
      const newOrderItem = await OrderItemService.createOrderItem(id, req.body);
      res.json(newOrderItem);
    } catch (e) {
      console.log(e);
      res.status(400).json({ message: "error" });
    }
  }

  async getOrderItems(req, res) {
    try {
      const orderItems = await OrderItemService.getOrderItems();
      res.json(orderItems);
    } catch (e) {
      console.log(e);
      res.status(400).json({ message: "error" });
    }
  }

  async getOrderItemById(req, res) {
    try {
      const orderItem = await OrderItemService.getOrderItemById(req.params.id);
      res.json(orderItem);
    } catch (e) {
      console.log(e);
      res.status(400).json({ message: "error" });
    }
  }

  async deleteOrderItem(req, res) {
    try {
      await OrderItemService.deleteOrderItem(req.params.id);
      res.json({ message: "Order item deleted successfully" });
    } catch (e) {
      console.log(e);
      res.status(400).json({ message: "error" });
    }
  }
}

module.exports = new OrderItemController();
