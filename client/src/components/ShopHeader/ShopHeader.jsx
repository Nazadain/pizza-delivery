import { memo, useContext, useEffect, useState } from "react";
import "./ShopHeader.css";
import { Link } from "react-router-dom";
import { CartContext } from "../../context";

const ShopHeader = memo(({ active, types, ...props }) => {
  if (props.isLoading) return <div className="loading__type"></div>;

  const [cartProducts, setCartProducts] = useContext(CartContext)[0];
  const [isCartOpen, setIsCartOpen] = useContext(CartContext)[1];
  const [isCartEmpty, setIsCartEmpty] = useState(true);
  const [cartQuantity, setCartQuantity] = useState(0);

  useEffect(() => {
    if (cartProducts.length) {
      setIsCartEmpty(false);
    }

    cartProducts.forEach((p) => {
      const cartNewQuantity = cartQuantity + 1;

      setCartQuantity(cartNewQuantity);
    });
  }, []);

  useEffect(() => {
    const links = document.querySelectorAll(".nav__link");
    links.forEach((link) => {
      const linkId = link.getAttribute("data-link");
      if (linkId === active) {
        link.classList.add("nav__link--active");
      } else {
        link.classList.remove("nav__link--active");
      }
    });
  }, [active]);

  const clickLinkHandler = (e) => {
    const link = e.target.getAttribute("data-link");
    if (!link) {
      const body = document.querySelector("body");
      return body.scrollIntoView({ alignToTop: true });
    }
    const section = document.querySelector(`#${link}`);

    section.scrollIntoView({ alignToTop: true });
  };

  const openCart = () => {
    setIsCartOpen(true);
  };

  return (
    <div className="shop__navbar">
      <ul className="nav__list">
        <Link className="anchor__logo">
          <img src="http://localhost:5000/pizza-logo.svg" />
        </Link>
        {types.map((type) => (
          <Link
            data-link={`${type.anchor}`}
            className="nav__link"
            key={type.id}
          >
            {type.title}
          </Link>
        ))}
      </ul>
      <button className="cart__btn" onClick={openCart}>
        Корзина
      </button>
    </div>
  );
});

export default ShopHeader;
