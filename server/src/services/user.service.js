const path = require("path");
const db = require(path.resolve("database"));
const uuid = require("uuid");

class UserService {
  async createUser(user) {
    const id = uuid.v4();
    const newUser = await db.query(
      `INSERT INTO users (id, name, password, f_name, phone, role_id) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
      [id, user.name, user.password, user.fName, user.phone, user.roleId]
    );
    console.log(`User ${id} created successfully`);
    return newUser.rows[0];
  }

  async getUsers() {
    const users = await db.query(`SELECT * FROM users`);
    console.log(`All users received successfully`);
    return users.rows;
  }

  async getUserById(id) {
    const user = await db.query(`SELECT * FROM users WHERE id = $1`, [id]);
    console.log(`User ${id} received successfully`);
    return user.rows[0];
  }

  async updateUser(id, user) {
    const updatedUser = await db.query(
      `UPDATE users SET name=$1, password=$2, f_name=$3, phone=$4 WHERE id=$5 RETURNING *`,
      [user.name, user.password, user.fName, user.phone, id]
    );
    console.log(`User ${id} updated successfully`);
    return updatedUser.rows[0];
  }

  async deleteUser(id) {
    await db.query(`DELETE FROM users WHERE id = $1 RETURNING *`, [id]);
    console.log(`User ${id} deleted successfully`);
  }
}

module.exports = new UserService();
