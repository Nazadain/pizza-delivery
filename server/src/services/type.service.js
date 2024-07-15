const db = require("../../db");

class TypeService {
  async createType(type) {
    const anchor = "a" + Math.random().toString(16).slice(12);
    const newType = await db.query(
      `INSERT INTO types (title, anchor) VALUES ($1, $2) RETURNING *`,
      [type.title, anchor]
    );
    return newType.rows[0];
  }

  async getTypes() {
    const types = await db.query(`SELECT * FROM types`);
    return types.rows;
  }

  async getTypeById(id) {
    const type = await db.query(`SELECT * FROM types WHERE id = $1`, [id]);
    return type.rows[0];
  }

  async deleteType(id) {
    await db.query(`DELETE FROM types WHERE id = $1`, [id]);
  }
}

module.exports = new TypeService();
