import { memo, useContext } from "react";
import { CartContext } from "../../../../context";
import "./QuantityContainer.css";

const QuantityContainer = memo(({ product, ...props }) => {
  const [cartProducts, setCartProducts] = useContext(CartContext)[0];

  const setNewCartProducts = (array) => {
    console.log(array);
    setCartProducts(array);
    localStorage.setItem("cart", JSON.stringify(array));
  };

  const updateCart = (newItem, index) => {
    return [
      ...cartProducts.slice(0, index),
      newItem,
      ...cartProducts.slice(index + 1),
    ];
  };

  const increment = () => {
    const cartItem = cartProducts.find((el) => el.id === product.id);
    const index = cartProducts.indexOf(cartItem);
    const newItem = {
      ...cartItem,
      quantity: (cartItem.quantity += 1),
    };
    const newArray = updateCart(newItem, index);

    setNewCartProducts(newArray);
  };

  const decrement = () => {
    const cartItem = cartProducts.find((el) => el.id === product.id);
    const index = cartProducts.indexOf(cartItem);

    if (cartItem.quantity === 1) {
      const newCartProducts = cartProducts.filter((p) => p.id !== cartItem.id);
      return setNewCartProducts(newCartProducts);
    }

    const newItem = {
      ...cartItem,
      quantity: (cartItem.quantity -= 1),
    };
    const newArray = updateCart(newItem, index);

    setNewCartProducts(newArray);
  };

  return (
    <div className="item__quantity">
      <button className="btn minus" onClick={decrement}>
        -
      </button>

      <p className="quantity">{product.quantity}</p>

      <button className="btn plus" onClick={increment}>
        +
      </button>
    </div>
  );
});

export default QuantityContainer;
