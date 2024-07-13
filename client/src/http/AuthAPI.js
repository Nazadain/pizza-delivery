export default class AuthAPI {
  static async registration(user) {
    const res = await fetch("http://localhost:5000/api/users/registration", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    if (!res) {
      throw new Error(res.statusText);
    }
    const newUser = await res.json();

    return newUser;
  }
}
