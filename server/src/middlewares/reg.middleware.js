const UserService = require("../services/user.service");

module.exports = async function userDataValidation(req, res, next) {
  const { login, password, role } = req.body;
  if (!login || !password || !role) {
    return res.status(400).json({ message: "Not all data has been entered" });
  }
  const candidate = await UserService.getUsers(login);
  if (candidate) {
    return res.status(400).json({ message: "User already exists" });
  }
  if (login.length < 5 || login.length > 30) {
    return res.status(400).json({
      message: "Wrong login length",
    });
  }
  if (password.length < 3 || password.length > 30) {
    return res.status(400).json({
      message: "Wrong password length",
    });
  }
  next();
};
