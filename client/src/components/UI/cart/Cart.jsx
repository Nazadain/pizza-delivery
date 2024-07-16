import { useContext } from "react";
import "./Cart.css";
import { CartContext } from "../../../context";

const Cart = ({ isCartOpen }) => {
  const cartProducts = useContext(CartContext);

  return (
    <div className={`cart__container ${isCartOpen ? "cart__active" : ""}`}>
      <h2 className="cart__title">Корзина</h2>
      {cartProducts.map((product) => (
        <div key={product.id} className="cart__item">
          <div className="img">
            <img src={`${process.env.REACT_APP_API_URL}${product.img}`} />
          </div>
          <div className="main__content">
            <h2 className="title">{product.title}</h2>
            <p>{product.quantity}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
