const db = require("../../db");

class IngredientService {
  async createIngredient(id, ingredient) {
    const newIngredient = await db.query(
      `INSERT INTO ingredients (id, title) VALUES ($1, $2) RETURNING *`,
      [id, ingredient.title]
    );
    return newIngredient.rows[0];
  }

  async getIngredients() {
    const ingredients = await db.query(`SELECT * FROM ingredients`);
    return ingredients.rows;
  }

  async getIngredientById(id) {
    const ingredient = await db.query(
      `SELECT * FROM ingredients WHERE id = $1`,
      [id]
    );
    return ingredient.rows[0];
  }

  async deleteIngredient(id) {
    await db.query(`DELETE FROM ingredients WHERE id = $1`, [id]);
  }
}

module.exports = new IngredientService();
