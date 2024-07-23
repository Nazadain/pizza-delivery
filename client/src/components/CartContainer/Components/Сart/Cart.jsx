import { memo, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../../context";
import CartItems from "../CartItems/CartItems";
import "./Cart.css";

const Cart = memo(({ ...props }) => {
  const [cartProducts, setCartProducts] = useContext(CartContext)[0];
  const [isCartOpen, setIsCartOpen] = useContext(CartContext)[1];
  const [fullPrice, setFullPrice] = useState(0);

  useEffect(() => {
    let newFullPrice = 0;
    cartProducts.forEach((p) => {
      newFullPrice += p.quantity * p.price;
      setFullPrice(newFullPrice);
    });
  }, [cartProducts]);

  return (
    <div className={`cart__container ${isCartOpen ? "cart__active" : ""}`}>
      <h2 className="cart__title">Корзина</h2>

      <CartItems />

      <div className="cart__footer">
        <div className="full__price">
          <p>Сумма заказа</p>
          <p className="price">{fullPrice}₽</p>
        </div>

        <Link
          to={"/Order"}
          className="order__link"
          onClick={() => setIsCartOpen(false)}
        >
          Оформить заказ
        </Link>
      </div>
    </div>
  );
});

export default Cart;
