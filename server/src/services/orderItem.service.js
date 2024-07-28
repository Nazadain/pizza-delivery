const db = require("../../db");

class OrderItemService {
  async createOrderItem(id, orderItem) {
    const newOrderItem = await db.query(
      `INSERT INTO order_items (id, quantity, product_id, order_id) VALUES ($1, $2, $3, $4) RETURNING *`,
      [id, orderItem.quantity, orderItem.productId, orderItem.orderId]
    );
    return newOrderItem.rows[0];
  }

  async getOrderItems(orderId = null) {
    let orderItems;
    if (!orderId) {
      orderItems = await db.query(`SELECT * FROM order_items`);
    } else {
      orderItems = await db.query(
        `SELECT * FROM order_items WHERE order_id=$1`,
        [orderId]
      );
    }

    return orderItems.rows;
  }

  async getOrderItemById(id) {
    const orderItem = await db.query(
      `SELECT * FROM order_items WHERE id = $1`,
      [id]
    );
    return orderItem.rows[0];
  }

  async deleteOrderItem(id) {
    await db.query(`DELETE FROM order_items WHERE id = $1`, [id]);
  }

  async deleteOrderItemsByOrderId(id) {
    await db.query(`DELETE FROM order_items WHERE order_id = $1`, [id]);
  }
}

module.exports = new OrderItemService();
