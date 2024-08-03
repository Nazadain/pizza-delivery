import { jwtDecode } from "jwt-decode";
import { useState } from "react";
import { useFetching } from "../../hooks/useFetching";
import "./ActiveOrders.css";
import OrdersAPI from "../../http/OrdersAPI";
import { useEffect } from "react";

const ActiveOrders = ({ ...props }) => {
  const [orders, setOrders] = useState([]);
  const [fetchOrders, isOrdersLoading, ordersError] = useFetching(async () => {
    const token = localStorage.getItem("auth");
    const user = jwtDecode(token);
    const ordersData = await OrdersAPI.getUserOrders(user.id);

    setOrders(ordersData.filter((el) => el.status_id < 6));
  });
  useEffect(() => {
    fetchOrders();
  }, []);

  if (isOrdersLoading) return <></>;

  return (
    <div className="active__orders">
      {orders.map((el) => (
        <div className="item">{el.customer_name}</div>
      ))}
    </div>
  );
};

export default ActiveOrders;
