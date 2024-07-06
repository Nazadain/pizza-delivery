const db = require("../../db");

class IngredientLinkService {
  async createLink(id, table, link) {
    let newLink;
    if (table === "product_ingredients") {
      newLink = await db.query(
        `INSERT INTO product_ingredients (id, quantity, product_id, ingredient_id) VALUES ($1, $2, $3, $4) RETURNING *`,
        [id, link.quantity, link.productId, link.ingredientId]
      );
    }
    if (table === "order_item_ingredients") {
      newLink = await db.query(
        `INSERT INTO order_item_ingredients (id, quantity, order_item_id, ingredient_id) VALUES ($1, $2, $3, $4) RETURNING *`,
        [id, link.quantity, link.orderItemId, link.ingredientId]
      );
    }
    return newLink.rows[0];
  }

  async getLinks(table) {
    let links;
    if (table === "product_ingredients") {
      links = await db.query(`SELECT * FROM product_ingredients`);
    }
    if (table === "order_item_ingredients") {
      links = await db.query(`SELECT * FROM order_item_ingredients`);
    }
    return links.rows;
  }

  async getLinksByTableItemId(id, table) {
    let links;
    if (table === "product_ingredients") {
      links = await db.query(
        `SELECT * FROM product_ingredients WHERE product_id = $1`,
        [id]
      );
    }
    if (table === "order_item_ingredients") {
      links = await db.query(
        `SELECT * FROM order_item_ingredients WHERE order_item_id = $1`,
        [id]
      );
    }
    return links.rows;
  }

  async deleteLink(id, table) {
    if (table === "product_ingredients") {
      await db.query(`DELETE FROM product_ingredients WHERE id = $1`, [id]);
    }
    if (table === "order_item_ingredients") {
      links = await db.query(
        `SELECT * FROM order_item_ingredients WHERE order_item_id = $1`,
        [id]
      );
    }
  }
}

module.exports = new IngredientLinkService();
