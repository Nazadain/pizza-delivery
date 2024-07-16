import { useContext } from "react";
import "./ModalProduct.css";
import { CartContext } from "../../../context";

const ModalProduct = ({ product, onClick }) => {
  const cartProducts = useContext(CartContext);

  const closeHandleClick = () => {
    onClick(false);
  };

  const addToCartHandler = () => {
    const cartData = JSON.parse(localStorage.getItem("cart"));
    if (cartData) {
      for (let data of cartData) {
        if (product.id === data.id) {
          product.quantity += 1;
          return onClick("cart__btn");
        }
      }
    }
    product.quantity = 1;
    cartProducts.push(product);
    localStorage.setItem("cart", JSON.stringify(cartProducts));

    onClick("cart__btn");
  };

  return (
    <div className="modal__product">
      <div className="modal__product__block" data-id={product.id}>
        <div className="close__btn" onClick={closeHandleClick}>
          <img src={`${process.env.REACT_APP_API_URL}close.svg`} />
        </div>

        <img src={`${process.env.REACT_APP_API_URL}${product.img}`} />
        <div className="content">
          <div className="main__content">
            <h3 className="title">{product.title}</h3>
            <p className="body">{product.body}</p>
          </div>
          <div className="cart__btn" onClick={addToCartHandler}>
            В корзину за {product.price}₽
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalProduct;
