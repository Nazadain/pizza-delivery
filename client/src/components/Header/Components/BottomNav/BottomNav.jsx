import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../context";
import UserAvatar from "../UserAvatar/UserAvatar";
import "./BottomNav.css";

const BottomNav = () => {
  const [isAuth, setIsAuth] = useContext(AuthContext);

  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem("auth");
  };

  return (
    <div className="bottom__nav">
      <div className="logo__container">
        <Link to={"/"} className="logo">
          PIZZA<span>HOT</span>
        </Link>
        <p>Доставка №1</p>
      </div>

      <div className="address_time">
        <p className="time">10:00 - 23:00</p>
        <p className="address">г.Ханты-Мансийск</p>
      </div>

      <div className="phone__list">
        <p>+7(3467) 127-803</p>
        <p>+7(3467) 831-662</p>
      </div>

      {isAuth ? (
        <UserAvatar />
      ) : (
        <Link to={"/login"} className="auth__btn">
          Войти
        </Link>
      )}
    </div>
  );
};

export default BottomNav;
