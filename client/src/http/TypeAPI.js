export default class TypeAPI {
  static async getAll() {
    const res = await fetch(`${process.env.REACT_APP_API_URL}api/types`);

    const typesData = await res.json();

    return typesData;
  }
}
