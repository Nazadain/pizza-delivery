const db = require("../../db");

class StatusService {
  async createStatus(status) {
    const newStatus = await db.query(
      `INSERT INTO statuses (title) VALUES ($1) RETURNING *`,
      [status.title]
    );
    return newStatus.rows[0];
  }

  async getStatuses() {
    const status = await db.query(`SELECT * FROM statuses`);
    return status.rows;
  }

  async getStatusById(id) {
    const status = await db.query(`SELECT * FROM statuses WHERE id = $1`, [id]);
    return status.rows[0];
  }

  async deleteType(id) {
    await db.query(`DELETE FROM statuses WHERE id = $1`, [id]);
  }
}

module.exports = new StatusService();
