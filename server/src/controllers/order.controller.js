const OrderService = require("../services/order.service");
const uuid = require("uuid");

class OrderController {
  async createOrder(req, res) {
    try {
      const id = uuid.v4();
      if (!req.body.comment) {
        req.body.comment = "";
      }
      const newOrder = await OrderService.createOrder(id, req.body);
      res.json(newOrder);
    } catch (e) {
      console.log(e);
      res.status(400).json({ message: "Create order error" });
    }
  }

  async getOrders(req, res) {
    try {
      const orders = await OrderService.getOrders();
      res.json(orders);
    } catch (e) {
      console.log(e);
      res.status(400).json({ message: "Get orders error" });
    }
  }

  async getOrderById(req, res) {
    try {
      const order = await OrderService.getOrderById(req.params.id);
      return order;
    } catch (e) {
      console.log(e);
      res.status(400).json({ message: "Create order by ID error" });
    }
  }

  async updateOrder(req, res) {
    try {
    } catch (e) {
      console.log(e);
      res.status(400).json({ message: "Update order error" });
    }
  }

  async deleteOrder(req, res) {
    try {
      await OrderService.deleteOrder(req.params.id);
      res.json({ message: "Order deleted successfully" });
    } catch (e) {
      console.log(e);
      res.status(400).json({ message: "Delete order error" });
    }
  }
}

module.exports = new OrderController();
