const db = require("../../db");

class TypeService {
  async createType(type) {
    const newType = await db.query(
      `INSERT INTO types (title) VALUES ($1) RETURNING *`,
      [type.title]
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
