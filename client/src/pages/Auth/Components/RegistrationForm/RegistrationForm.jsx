import { memo, useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../context";
import { useFetching } from "../../../../hooks/useFetching";
import AuthAPI from "../../../../http/AuthAPI";

const RegistrationForm = memo(({ ...props }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState({ name: "", password: "", role: "" });
  const [isAuth, setIsAuth] = useContext(AuthContext);
  const [fetchRegistration, isRegistrationLoading, registrationError] =
    useFetching(async () => {
      const registrationData = await AuthAPI.registration(user);
      if (!registrationData.token) return;

      localStorage.setItem("auth", JSON.stringify(registrationData.token));
    });

  useEffect(() => {
    if (localStorage.getItem("auth")) {
      setIsAuth(true);
      navigate("/");
    }
  }, [fetchRegistration]);

  const createNewUser = (e) => {
    e.preventDefault();
    fetchRegistration();
  };

  return (
    <form className="user__form" onSubmit={createNewUser}>
      <input
        type="text"
        placeholder="Логин"
        value={user.name}
        onChange={(e) => setUser({ ...user, name: e.target.value })}
      />
      <input
        type="password"
        placeholder="Пароль"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
      />
      <select
        className="option__container"
        onChange={(e) => setUser({ ...user, role: e.target.value })}
      >
        <option value="">---None---</option>
        <option value="MANAGER">Менеджер</option>
        <option value="CUSTOMER">Покупатель</option>
        <option value="COURIER">Курьер</option>
        <option value="KITCHEN">Кухня</option>
      </select>
      <p>
        Уже есть аккаунт?{" "}
        <Link to={"/login"} className="link">
          Авторизуйтесь!
        </Link>
      </p>
      <button>Создать аккаунт</button>
    </form>
  );
});

export default RegistrationForm;
