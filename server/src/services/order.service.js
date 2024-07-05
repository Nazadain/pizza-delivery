const db = require("../../db");

class OrderService {
  async createOrder(id, order) {
    const newOrder = await db.query(
      `INSERT INTO orders (id, comment, street, house_num, apartment_num, phone, customer_name, status_id, user_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *`,
      [
        id,
        order.comment,
        order.street,
        order.houseNum,
        order.apartmentNum,
        order.phone,
        order.customerName,
        order.statusId,
        order.userId,
      ]
    );
    return newOrder.rows[0];
  }

  async getOrders() {
    const orders = await db.query(`SELECT * FROM orders`);
    return orders.rows;
  }

  async getOrderById(id) {
    const order = await db.query(`SELECT * FROM orders WHERE id = $1`, [id]);
    return order.rows[0];
  }

  async updateOrder(id, order) {}

  async deleteOrder(id) {
    await db.query(`DELETE FROM orders WHERE id = $1`, [id]);
  }
}

module.exports = new OrderService();
