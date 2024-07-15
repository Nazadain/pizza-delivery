import { useEffect } from "react";
import "./ShopNav.css";

const ShopNav = ({ active, types }) => {
  useEffect(() => {
    const links = document.querySelectorAll(".nav__link");
    links.forEach((link) => {
      const linkId = link.getAttribute("href").replace("#", "");
      if (linkId === active) {
        link.classList.add("nav__link--active");
      } else {
        link.classList.remove("nav__link--active");
      }
    });
  }, [active]);

  return (
    <div className="shop__navbar">
      <ul className="nav__list">
        <a href="#" className="anchor__logo">
          <img src="http://localhost:5000/pizza-logo.svg" />
        </a>
        {types.map((type) => (
          <a href={`#${type.anchor}`} className="nav__link" key={type.id}>
            {type.title}
          </a>
        ))}
      </ul>
      <div className="cart__btn">Корзина</div>
    </div>
  );
};

export default ShopNav;
