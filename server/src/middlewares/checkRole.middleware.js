require("dotenv").config();

module.exports = function (...roles) {
  return function (req, res, next) {
    if (req.method === "OPTIONS") {
      next();
    }
    try {
      if (!req.user) {
        return res.status(401).json({ message: "User is not authorized" });
      }
      for (role of roles) {
        if (req.user.role === role) {
          return next();
        }
      }
      return res.status(403).json({ message: "You don't have access" });
    } catch (e) {
      console.log(e);
      return res.status(400).json({ message: "Role middleware error" });
    }
  };
};
