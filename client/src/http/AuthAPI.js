export default class AuthAPI {
  static async registration(user) {
    try {
      const res = await fetch(
        `${process.env.REACT_APP_API_URL}/api/users/registration`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        }
      );
      const newUser = await res.json();

      return newUser;
    } catch (e) {
      res.status(400).json({ message: "Auth error" });
    }
  }

  static async login(user) {
    try {
      const res = await fetch(
        `${process.env.REACT_APP_API_URL}/api/users/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        }
      );
      const loginData = await res.json();

      return loginData;
    } catch (e) {
      res.status(400).json({ message: "Auth error" });
    }
  }
}
