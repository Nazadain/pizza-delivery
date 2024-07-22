import { memo, useContext } from "react";
import { CartContext } from "../../../../context";
import "./Cart.css";

const Cart = memo(({ ...props }) => {
  const [cartProducts, setCartProducts] = useContext(CartContext)[0];
  const [isCartOpen, setIsCartOpen] = useContext(CartContext)[1];

  const deleteProduct = (e) => {
    const target = e.target.closest(".cart__item");
    const id = target.getAttribute("data-id");

    const newCartProducts = cartProducts.filter((product) => product.id !== id);

    localStorage.setItem("cart", JSON.stringify(newCartProducts));
    setCartProducts(newCartProducts);
  };

  return (
    <div className={`cart__container ${isCartOpen ? "cart__active" : ""}`}>
      <h2 className="cart__title">Корзина</h2>
      {cartProducts.map((product) => (
        <div key={product.id} className="cart__item" data-id={product.id}>
          <div className="img">
            <img src={`${process.env.REACT_APP_API_URL}${product.img}`} />
          </div>
          <div className="main__content">
            <div className="close__btn" onClick={deleteProduct}>
              <img
                src={`${process.env.REACT_APP_API_URL}close-btn/black-btn.svg`}
              />
            </div>
            <h2 className="title">{product.title}</h2>
            <p className="quantity">{product.quantity}</p>
          </div>
        </div>
      ))}
    </div>
  );
});

export default Cart;
