require("dotenv").config();

module.exports = function (role) {
  return function (req, res, next) {
    try {
      if (!req.user) {
        return res.status(401).json({ message: "User is not authorized" });
      }
      if (req.user.role !== role) {
        return res.status(403).json({ message: "You don't have access" });
      }
      next();
    } catch (e) {
      console.log(e);
      return res.status(401).json({ message: "Role middleware error" });
    }
  };
};
