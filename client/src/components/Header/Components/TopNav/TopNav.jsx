import { Link } from "react-router-dom";
import "./TopNav.css";
import { memo } from "react";

const TopNav = memo(({ className, ...props }) => {
  return (
    <div className={className}>
      <Link to={"/About"} className="nav__item">
        О нас
      </Link>
      <Link to={"/Contacts"} className="nav__item">
        Контакты
      </Link>
    </div>
  );
});

export default TopNav;
