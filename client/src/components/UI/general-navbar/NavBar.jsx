import { Link } from "react-router-dom";
import "./NavBar.css";
import { useState } from "react";

const NavBar = () => {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <header className="header">
      <div className="top__nav">
        <Link to={"/About"} className="nav__item">
          О нас
        </Link>
        <Link to={"/Contacts"} className="nav__item">
          Контакты
        </Link>
      </div>

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
          <h2>Пользователь</h2>
        ) : (
          <Link to={"/Login"} className="auth__btn">
            Войти
          </Link>
        )}
      </div>
    </header>
  );
};

export default NavBar;
