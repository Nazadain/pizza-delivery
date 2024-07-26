import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { useFetching } from "../hooks/useFetching";
import OrdersAPI from "../http/OrdersAPI";

const UserOrders = ({ ...props }) => {
  const [orders, setOrders] = useState([]);
  const [user, setUser] = useState({
    id: "",
    name: "",
    role: "",
  });
  const [fetchOrders, isOrdersLoading, ordersError] = useFetching(async () => {
    const ordersData = await OrdersAPI.getAll();
    setOrders(ordersData);
  });

  useEffect(() => {
    fetchOrders();
    const token = localStorage.getItem("auth");
    const decodedUser = jwtDecode(token);

    setUser({
      id: decodedUser.id,
      name: decodedUser.name,
      role: decodedUser.role,
    });
  }, []);

  if (isOrdersLoading) return <></>;

  return (
    <>
      {orders.map((el) => (
        <div key={el.id}>{el.customer_name}</div>
      ))}
    </>
  );
};

export default UserOrders;
