import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Title from "../../components/UI/Title/Title";
import { useFetching } from "../../hooks/useFetching";
import OrdersAPI from "../../http/OrdersAPI";
import StatusAPI from "../../http/StatusAPI";
import "./UserOrders.css";

const UserOrders = ({ ...props }) => {
  const [orders, setOrders] = useState([]);
  const [statuses, setStatuses] = useState([]);
  const [fetchOrders, isOrdersLoading, ordersError] = useFetching(async () => {
    const token = localStorage.getItem("auth");
    const user = jwtDecode(token);
    const ordersData = await OrdersAPI.getUserOrders(user.id);
    setOrders(ordersData);
  });
  const [fetchStatus, isStatusLoading, statusError] = useFetching(async () => {
    const statuses = await StatusAPI.getAll();
    setStatuses(statuses);
  });

  useEffect(() => {
    fetchOrders();
    fetchStatus();
  }, []);

  if (isOrdersLoading || isStatusLoading)
    return <div className="container"></div>;

  if (!orders.length) {
    return (
      <div className="container">
        <Title variant="h1">Заказов нет</Title>
        <Link to={"/"} className="link">
          Сделать заказ
        </Link>
      </div>
    );
  }

  return (
    <div className="container">
      <Title variant="h1">Мои заказы</Title>
      <div className="orders__container">
        <div className="table__header">
          <p>№</p>
          <p>Время заказа</p>
          <p>Сумма</p>
          <p>Статус</p>
        </div>
        <div className="order__items">
          {orders.map((el) => (
            <div
              className={`item ${el.status_id > 5 ? "" : "active"}`}
              key={el.id}
            >
              <p>{el.id.split("-")[0]}</p>
              <p>
                {new Date(el.date).toLocaleDateString("ru")}{" "}
                {el.time.split(".")[0]}
              </p>
              <p>{el.price}</p>
              <p>{statuses.find((s) => s.id === el.status_id).title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserOrders;
