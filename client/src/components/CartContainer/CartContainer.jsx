import { memo, useContext, useEffect } from "react";
import { CartContext } from "../../context";
import "./CartContainer.css";
import Cart from "./Components/Сart/Cart";

const CartContainer = memo(({ ...props }) => {
  const [isCartOpen, setIsCartOpen] = useContext(CartContext)[1];

  useEffect(() => {
    if (isCartOpen) {
      let scrollbarWidth = `${window.innerWidth - document.body.clientWidth}px`;
      document.documentElement.style.overflowY = "hidden";
      document.body.style.marginRight = scrollbarWidth;
    } else {
      document.body.style.marginRight = "0";
      document.documentElement.style.overflowY = "scroll";
    }
  }, [isCartOpen]);

  return (
    <>
      <div
        className={`cart__fade ${isCartOpen ? "fade__active" : ""}`}
        onClick={() => setIsCartOpen(false)}
      ></div>

      <Cart />
    </>
  );
});

export default CartContainer;
