import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import Title from "../../components/UI/Title/Title";
import { useFetching } from "../../hooks/useFetching";
import OrdersAPI from "../../http/OrdersAPI";
import "./UserOrders.css";

const UserOrders = ({ ...props }) => {
  const [orders, setOrders] = useState([]);
  const [fetchOrders, isOrdersLoading, ordersError] = useFetching(async () => {
    const token = localStorage.getItem("auth");
    const user = jwtDecode(token);
    const ordersData = await OrdersAPI.getUserOrders(user.id);
    setOrders(ordersData);
  });

  useEffect(() => {
    fetchOrders();
  }, []);

  if (isOrdersLoading) return <></>;

  return (
    <div className="container">
      <Title variant="h1">Мои заказы</Title>

      <div className="orders__container">
        {orders.map((el) => (
          <div className="order" key={el.id}>
            {console.log(orders)}
            <Title variant="h3">Заказ {el.id.split("-")[0]}</Title>
            <p>Дата: {el.date.split("T")[0]}</p>
            <p>Время: {el.time.split(".")[0]}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserOrders;
