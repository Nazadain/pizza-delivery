const UserService = require("../services/user.service");
const sha256 = require("js-sha256");
const uuid = require("uuid");

class UserController {
  async registration(req, res) {
    try {
      const { login, password } = req.body;
      const id = uuid.v4();
      const candidate = await UserService.getUsers(login);
      if (candidate) {
        return res.status(400).json({ message: "User already exists" });
      }
      const hashPassword = sha256(password);
      const newUser = await UserService.createUser(id, hashPassword, req.body);
      res.json(newUser);
    } catch (e) {
      console.log(e);
      res.status(400).json({ message: "Registration error" });
    }
  }

  async login(req, res) {
    try {
    } catch (e) {
      console.log(e);
      res.status(400).json({ message: "Login error" });
    }
  }

  async checkAuth(req, res) {
    try {
    } catch (e) {
      console.log(e);
      res.status(400).json({ message: "User do not auth" });
    }
  }

  async getUsers(req, res) {
    try {
      const { login } = req.query;
      if (login) {
        const users = await UserService.getUsers(login);
        return res.json(users);
      }
      const users = await UserService.getUsers();
      res.json(users);
    } catch (e) {
      console.log(e);
      res.status(400).json({ message: "Get user error" });
    }
  }

  async getUserById(req, res) {
    try {
      const user = await UserService.getUserById(req.params.id);
      res.json(user);
    } catch (e) {
      console.log(e);
      res.status(400).json({ message: "Get user by ID error" });
    }
  }

  async deleteUser(req, res) {
    try {
      await UserService.deleteUser(req.params.id);
      res.json("User deleted successfully");
    } catch (e) {
      console.log(e);
      res.status(400).json({ message: "Delete user error" });
    }
  }
}

module.exports = new UserController();
