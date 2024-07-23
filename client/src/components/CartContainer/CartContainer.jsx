import { memo, useContext, useEffect } from "react";
import { CartContext } from "../../context";
import Cart from "./Components/Сart/Cart";
import "./CartContainer.css";

const CartContainer = memo(({ ...props }) => {
  const [isCartOpen, setIsCartOpen] = useContext(CartContext)[1];

  useEffect(() => {
    if (isCartOpen) {
      const scrollWidth = window.scrollX;
      document.body.style.overflowY = "hidden";
      document.body.style.paddingRight = scrollWidth;
    } else {
      document.body.style.overflowY = "scroll";
      document.body.style.paddingRight = "0";
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
