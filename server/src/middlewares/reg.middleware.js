const UserService = require("../services/user.service");

module.exports = async function userDataValidation(req, res, next) {
  const { name, password, role } = req.body;
  if (!name || !password || !role) {
    return res.status(400).json({ message: "Not all data has been entered" });
  }

  name = name.toLowerCase();

  const candidate = await UserService.getUsers(name);
  if (candidate) {
    return res.status(400).json({ message: "User already exists" });
  }
  if (name.length < 5 || name.length > 30) {
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
