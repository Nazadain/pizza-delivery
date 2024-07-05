const UserService = require("../services/user.service");
const sha256 = require("js-sha256");
const uuid = require("uuid");
const jwt = require("jsonwebtoken");
require("dotenv").config();

class UserController {
  async registration(req, res) {
    try {
      const { login, password, role } = req.body;
      const id = uuid.v4();
      const hashPassword = sha256(password);
      const newUser = await UserService.createUser(id, hashPassword, req.body);
      const token = generateAccessToken(login, role, id);
      res.json({ user: newUser, token: token });
    } catch (e) {
      console.log(e);
      res.status(400).json({ message: "Registration error" });
    }
  }

  async login(req, res) {
    try {
      const { name, password } = req.body;
      const user = await UserService.getUsers(name);
      if (!user) {
        return res.status(400).json({ message: `User ${name} not found` });
      }
      const hashPassword = sha256(password);
      if (hashPassword !== user.password) {
        return res.status(400).json({ message: "Wrong password" });
      }
      const token = generateAccessToken(name, user.role, user.id);
      return res.json({ token: token });
    } catch (e) {
      console.log(e);
      res.status(400).json({ message: "Login error" });
    }
  }

  async checkAuth(req, res) {
    try {
      const token = generateAccessToken(user.name, user.role, user.id);
      return res.json({ token: token });
    } catch (e) {
      console.log(e);
      res.status(400).json({ message: "User do not auth" });
    }
  }

  async getUsers(req, res) {
    try {
      const { name } = req.query;
      if (name) {
        const users = await UserService.getUsers(name);
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

const generateAccessToken = (name, role, id) => {
  const payload = {
    id,
    name,
    role,
  };
  return jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: "12h" });
};

module.exports = new UserController();
