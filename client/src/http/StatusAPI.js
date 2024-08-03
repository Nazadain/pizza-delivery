export default class StatusAPI {
  static async getAll() {
    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/api/statuses`);

      const statuses = res.json();
      return statuses;
    } catch (e) {
      throw new Error(e.statusText);
    }
  }
}
