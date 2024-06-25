const UserService = require("../services/user.service");
const UserCheck = require("../middlewares/user.check");

class UserController {
  async createUser(req, res) {
    const checkUser = UserCheck.checkCreateUserData(req.body);

    if (!checkUser) return res.redirect("/");

    const newUser = await UserService.createUser(req.body);
    res.json(newUser);
  }

  async getUsers(req, res) {
    const users = await UserService.getUsers();
    res.json(users);
  }

  async getUserById(req, res) {
    const user = await UserService.getUserById(req.params.id);
    res.json(user);
  }

  async updateUser(req, res) {
    const oldUserData = await UserService.getUserById(req.params.id);
    const newUserData = UserCheck.checkUpdateUserData(oldUserData, req.body);

    if (!newUserData) {
      return res.redirect("/");
    }

    const updatedUser = await UserService.updateUser(
      req.params.id,
      newUserData
    );
    res.json(updatedUser);
  }

  async deleteUser(req, res) {
    await UserService.deleteUser(req.params.id);
    res.json("User deleted successfully");
  }
}

module.exports = new UserController();
