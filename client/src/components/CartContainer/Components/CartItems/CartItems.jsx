import { memo, useContext } from "react";
import { CartContext } from "../../../../context";
import QuantityContainer from "../QuantityContainer/QuantityContainer";
import "./CartItems.css";

const CartItems = memo(({ ...props }) => {
  const [cartProducts, setCartProducts] = useContext(CartContext)[0];

  const deleteProduct = (e) => {
    const target = e.target.closest(".cart__item");
    const id = target.getAttribute("data-id");

    const newCartProducts = cartProducts.filter((product) => product.id !== id);

    localStorage.setItem("cart", JSON.stringify(newCartProducts));
    setCartProducts(newCartProducts);
  };

  return (
    <div className="cart__items--container">
      {cartProducts.map((p) => (
        <div key={p.id} className="cart__item" data-id={p.id}>
          <div className="img">
            <img src={`${process.env.REACT_APP_API_URL}/${p.img}`} />
          </div>
          <div className="main__content">
            <div className="close__btn" onClick={deleteProduct}>
              <img
                src={`${process.env.REACT_APP_API_URL}/close-btn/black-btn.svg`}
              />
            </div>
            <h2 className="title">{p.title}</h2>

            <QuantityContainer product={p} />
          </div>
          <p className="price">{p.price}₽</p>
        </div>
      ))}
    </div>
  );
});

export default CartItems;
