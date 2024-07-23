import { memo, useContext } from "react";
import { CartContext } from "../../../../context";
import CartFooter from "../CartFooter/CartFooter";
import CartItems from "../CartItems/CartItems";
import Title from "../../../UI/Title/Title";
import "./Cart.css";

const Cart = memo(({ ...props }) => {
  const [cartProducts, setCartProducts] = useContext(CartContext)[0];
  const [isCartOpen, setIsCartOpen] = useContext(CartContext)[1];

  return (
    <div className={`cart__container ${isCartOpen ? "cart__active" : ""}`}>
      {!cartProducts || !cartProducts.length ? (
        <Title variant="h2" className="cart__title">
          Корзина пуста
        </Title>
      ) : (
        <></>
      )}
      <CartItems />
      <CartFooter />
    </div>
  );
});

export default Cart;
