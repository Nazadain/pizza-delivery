const db = require("../../db");

class UserService {
  async createUser(id, user) {
    const newUser = await db.query(
      `INSERT INTO users (id, login, password, f_name, role) VALUES ($1, $2, $3, $4, $5) RETURNING *`,
      [id, user.name, user.password, user.fName, user.role]
    );
    return newUser.rows[0];
  }

  async getUsers() {
    const users = await db.query(`SELECT * FROM users`);
    return users.rows;
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
