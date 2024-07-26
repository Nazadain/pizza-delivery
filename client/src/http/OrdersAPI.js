export default class OrdersAPI {
  static async getAll() {
    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/api/orders`);

      const ordersData = res.json();
      return ordersData;
    } catch (e) {
      throw new Error(e.statusText);
    }
  }
}
