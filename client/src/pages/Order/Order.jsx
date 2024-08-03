import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context";
import ProductList from "./Components/ProductList/ProductList";
import "./Order.css";
import Title from "../../components/UI/Title/Title";
import OrderForm from "./Components/OrderForm/OrderForm";

const Order = () => {
  const [cartProducts, setCartProducts] = useContext(CartContext)[0];
  const [fullPrice, setFullPrice] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let newPrice = 0;

    cartProducts.forEach((p) => {
      newPrice = newPrice + p.price * p.quantity;
    });
    setFullPrice(newPrice);
  }, []);

  useEffect(() => {
    setIsLoading(false);
  }, [fullPrice]);

  if (isLoading) return <div className="container"></div>;

  return (
    <div className="container">
      <Title variant="h1">Оформление заказа</Title>
      <div className="order__blocks">
        <OrderForm fullPrice={fullPrice} />
        <ProductList cartProducts={cartProducts} fullPrice={fullPrice} />
      </div>
    </div>
  );
};

export default Order;
