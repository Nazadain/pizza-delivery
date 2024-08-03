const db = require("../../db");

class OrderService {
  async createOrder(id, order) {
    const newOrder = await db.query(
      `INSERT INTO orders (id, comment, price, street, house_num, apartment_num, phone, customer_name, status_id, user_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *`,
      [
        id,
        order.comment,
        order.price,
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

  async getOrders(userId = null) {
    let orders;
    if (!userId) {
      orders = await db.query(`SELECT * FROM orders`);
    } else {
      orders = await db.query(`SELECT * FROM orders WHERE user_id=$1`, [
        userId,
      ]);
    }

    return orders.rows;
  }

  async getOrderById(id) {
    const order = await db.query(`SELECT * FROM orders WHERE id = $1`, [id]);
    return order.rows[0];
  }

  async updateOrder(id, order) {
    await db.query(
      `UPDATE orders SET comment = $1, courier_id = $2, status_id = $3 WHERE id = $4`,
      [order.comment, order.courierId, order.statusId, id]
    );
  }

  async deleteOrder(id) {
    await db.query(`DELETE FROM orders WHERE id = $1`, [id]);
  }

  async deleteOrdersByUserId(id) {
    await db.query(`DELETE FROM orders WHERE user_id = $1`, [id]);
  }
}

module.exports = new OrderService();
