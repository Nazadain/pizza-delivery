const db = require("../../db");

class ProductService {
  async createProduct(id, fileName, product) {
    const newProduct = await db.query(
      `INSERT INTO products (id, title, body, img, price, type_id) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
      [id, product.title, product.body, fileName, product.price, product.typeId]
    );
    return newProduct.rows[0];
  }

  async getProducts() {
    const products = await db.query(`SELECT * FROM products`);
    return products.rows;
  }

  async getProductById(id) {
    const product = await db.query(`SELECT * FROM products WHERE id = $1`, [
      id,
    ]);
    return product.rows[0];
  }

  async updateProduct(id, fileName, product) {
    const updatedProduct = await db.query(
      `UPDATE products SET title = $1, body = $2, img = $3, price = $4, type_id = $5 WHERE id = $6 RETURNING *`,
      [product.title, product.body, fileName, product.price, product.typeId, id]
    );
    return updatedProduct.rows[0];
  }

  async deleteProduct(id) {
    await db.query(`DELETE FROM products WHERE id = $1`, [id]);
  }
}

module.exports = new ProductService();
