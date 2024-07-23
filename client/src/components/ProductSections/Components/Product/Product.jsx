import { memo, useContext, useEffect, useState } from "react";
import { CartContext, ModalContext } from "../../../../context";
import Title from "../../../UI/Title/Title";
import ProductButton from "../ProductButton/ProductButton";
import "./Product.css";

const Product = memo(({ product, addToCartClick, ...props }) => {
  const [cartProducts, setCartProducts] = useContext(CartContext)[0];
  const [modalData, setModalData] = useContext(ModalContext);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const cartItem = cartProducts.filter((p) => p.id === product.id);

    if (cartItem.length) setIsActive(true);
    else setIsActive(false);
  }, [cartProducts]);

  const clickOnProduct = (e) => {
    if (e.target.classList.contains("cart__add--btn")) return;

    setModalData(product);
  };

  const addToCart = (e) => {
    if (e.target.classList.contains("active")) return;
    addToCartClick(product);
  };

  return (
    <div
      className="product__list--item"
      id={product.id}
      onClick={clickOnProduct}
    >
      <div className="product__header">
        <div className="image">
          <img src={`${process.env.REACT_APP_API_URL}/${product.img}`} />
        </div>
        <Title className="title" variant="h3">
          {product.title}
        </Title>
        <p className="body">{product.body}</p>
      </div>

      <div className="product__footer">
        <p className="price">{product.price}₽</p>

        <ProductButton
          className={`cart__add--btn ${isActive ? "active" : ""}`}
          product={product}
          addToCart={addToCart}
        >
          {isActive ? "В корзине" : "В корзину"}
        </ProductButton>
      </div>
    </div>
  );
});

export default Product;
