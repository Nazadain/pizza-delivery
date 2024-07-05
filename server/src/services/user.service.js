const db = require("../../db");

class UserService {
  async createUser(id, hashPassword, user) {
    const newUser = await db.query(
      `INSERT INTO users (id, name, password, role) VALUES ($1, $2, $3, $4) RETURNING *`,
      [id, user.name, hashPassword, user.role]
    );
    return newUser.rows[0];
  }

  async getUsers(name = null) {
    if (!name) {
      const users = await db.query(`SELECT * FROM users`);
      return users.rows;
    }
    const users = await db.query(`SELECT * FROM users WHERE name = $1`, [name]);
    return users.rows[0];
  }

  async getUserById(id) {
    const user = await db.query(`SELECT * FROM users WHERE id = $1`, [id]);
    return user.rows[0];
  }

  async deleteUser(id) {
    await db.query(`DELETE FROM users WHERE id = $1`, [id]);
  }
}

module.exports = new UserService();
