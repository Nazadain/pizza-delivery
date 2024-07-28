export default class OrdersAPI {
  static async getUserOrders(userId) {
    try {
      const res = await fetch(
        `${process.env.REACT_APP_API_URL}/api/orders?user=${userId}`
      );

      const ordersData = res.json();
      return ordersData;
    } catch (e) {
      throw new Error(e.statusText);
    }
  }

  static async getOrderItems(orderId) {
    try {
      const res = await fetch(
        `${process.env.REACT_APP_API_URL}/api/orderItems?order=${orderId}`
      );
      const orderItemsData = res.json();

      return orderItemsData;
    } catch (e) {
      throw new Error(e.statusText);
    }
  }
}
