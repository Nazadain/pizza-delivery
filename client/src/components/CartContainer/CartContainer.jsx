import { useContext } from "react";
import { CartContext } from "../../context";
import Cart from "./Components/Сart/Cart";
import "./CartContainer.css";

const CartContainer = ({ ...props }) => {
  const [isCartOpen, setIsCartOpen] = useContext(CartContext)[1];

  return (
    <>
      <div
        className={`cart__fade ${isCartOpen ? "fade__active" : ""}`}
        onClick={() => setIsCartOpen(false)}
      ></div>

      <Cart />
    </>
  );
};

export default CartContainer;
