export default class ProductAPI {
  static async create(body) {
    const res = await fetch(`${process.env.REACT_APP_API_URL}/api/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(body),
    });

    if (!res) {
      throw new Error(res.statusText);
    }
    const productsData = await res.json();

    return productsData;
  }

  static async getAll() {
    const res = await fetch("http://localhost:5000/api/products");

    if (!res) {
      throw new Error(res.statusText);
    }
    const productsData = await res.json();

    return productsData;
  }

  static async getById(id) {
    const res = await fetch(`http://localhost:5000/api/products/${id}`);

    if (!res) {
      throw new Error(res.statusText);
    }
    const productData = await res.json();

    return productData;
  }

  static async update(id, body) {
    const res = await fetch(`http://localhost:5000/api/products/${id}`, {
      method: "UPDATE",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(body),
    });

    if (!res) {
      throw new Error(res.statusText);
    }
    const productData = await res.json();

    return productData;
  }
}
