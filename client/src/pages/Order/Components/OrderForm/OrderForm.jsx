import { jwtDecode } from "jwt-decode";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../../../context";
import OrdersAPI from "../../../../http/OrdersAPI";
import "./OrderForm.css";

const OrderForm = ({ fullPrice, ...props }) => {
  const navigate = useNavigate();
  const [cartProducts, setCartProducts] = useContext(CartContext)[0];
  const [orderInfo, setOrderInfo] = useState({
    userId: "",
    customerName: "",
    phone: "",
    street: "",
    houseNum: "",
    apartmentNum: "",
    comment: "",
    price: fullPrice,
    statusId: 1,
  });

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("auth"));
    const user = jwtDecode(token);
    setOrderInfo({ ...orderInfo, userId: user.id });
    console.log(cartProducts);
  }, []);

  const createOrder = async (e) => {
    e.preventDefault();
    const newOrder = await OrdersAPI.createOrder(orderInfo);

    cartProducts.forEach(async (p) => {
      const item = {
        productId: p.id,
        orderId: newOrder.id,
        quantity: p.quantity,
      };
      const newOrderItem = await OrdersAPI.createOrderItem(item);
    });

    setCartProducts([]);
    navigate("/");
  };

  return (
    <div className="order__form">
      <form onSubmit={createOrder}>
        <p>Имя</p>
        <input
          type="text"
          name="name"
          onChange={(e) =>
            setOrderInfo({ ...orderInfo, customerName: e.target.value })
          }
        />
        <p>Телефон</p>
        <input
          type="text"
          name="phone"
          onChange={(e) =>
            setOrderInfo({ ...orderInfo, phone: e.target.value })
          }
        />
        <p>Улица</p>
        <input
          type="text"
          name="street"
          onChange={(e) =>
            setOrderInfo({ ...orderInfo, street: e.target.value })
          }
        />
        <p>Дом</p>
        <input
          type="text"
          name="house"
          onChange={(e) =>
            setOrderInfo({ ...orderInfo, houseNum: Number(e.target.value) })
          }
        />
        <p>Квартира</p>
        <input
          type="text"
          name="apartment"
          onChange={(e) =>
            setOrderInfo({ ...orderInfo, apartmentNum: Number(e.target.value) })
          }
        />
        <p>Комментарий</p>
        <textarea
          name="comment"
          onChange={(e) =>
            setOrderInfo({ ...orderInfo, comment: e.target.value })
          }
        />
        <button>Оформить заказ</button>
      </form>
    </div>
  );
};

export default OrderForm;
