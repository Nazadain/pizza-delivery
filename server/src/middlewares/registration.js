module.exports = function checkUserData(req, res, next) {
  const { login, password, role } = req.body;
  if (!login || !password || !role) {
    return res.status(400).json({ message: "Not all data has been entered" });
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
