import { memo } from "react";
import { Link } from "react-router-dom";
import "./TopNav.css";

const TopNav = () => {
  return (
    <div className="top__nav">
      <Link to={"/about"} className="nav__item">
        О нас
      </Link>
      <Link to={"/contacts"} className="nav__item">
        Контакты
      </Link>
    </div>
  );
};

export default TopNav;
