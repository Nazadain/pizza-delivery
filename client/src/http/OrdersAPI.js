export default class OrdersAPI {
  static async createOrder(body) {
    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/api/orders`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(body),
      });
      const orderData = await res.json();
      return orderData;
    } catch (e) {
      throw new Error(e.statusText);
    }
  }

  static async getUserOrders(userId) {
    try {
      const res = await fetch(
        `${process.env.REACT_APP_API_URL}/api/orders?user=${userId}`
      );

      const ordersData = await res.json();
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
      const orderItemsData = await res.json();

      return orderItemsData;
    } catch (e) {
      throw new Error(e.statusText);
    }
  }

  static async createOrderItem(body) {
    try {
      const res = await fetch(
        `${process.env.REACT_APP_API_URL}/api/orderItems`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
          body: JSON.stringify(body),
        }
      );

      const orderItem = await res.json();
      return orderItem;
    } catch (e) {
      throw new Error(e.statusText);
    }
  }

  static async getStatuses() {}
}
