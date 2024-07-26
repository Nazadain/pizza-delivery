import { memo, useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../context";
import { useFetching } from "../../../../hooks/useFetching";
import AuthAPI from "../../../../http/AuthAPI";

const LoginForm = memo(({ ...props }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState({ name: "", password: "" });
  const [isAuth, setIsAuth] = useContext(AuthContext);
  const [fetchLogin, isLoginLoading, loginError] = useFetching(async () => {
    const loginData = await AuthAPI.login(user);
    if (!loginData.token) return;
    localStorage.setItem("auth", JSON.stringify(loginData.token));
  });

  useEffect(() => {
    if (localStorage.getItem("auth")) {
      setIsAuth(true);
      navigate("/");
    }
  }, [fetchLogin]);

  const loginUser = (e) => {
    e.preventDefault();
    fetchLogin();
  };

  return (
    <form className="user__form" onSubmit={loginUser}>
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
      <p>
        Нет аккаунта?{" "}
        <Link to={"/registration"} className="link">
          Зарегистрируйтесь!
        </Link>
      </p>
      <button>Войти</button>
    </form>
  );
});

export default LoginForm;
