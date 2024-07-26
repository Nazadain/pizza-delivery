import { jwtDecode } from "jwt-decode";
import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../../../context";
import "./UserAvatar.css";
import { Link } from "react-router-dom";

const UserAvatar = ({ ...props }) => {
  const [isAuth, setIsAuth] = useContext(AuthContext);
  const [nameFirstLetter, setNameFirstLetter] = useState("");
  const modalRef = useRef(null);
  const avatarRef = useRef(null);

  useEffect(() => {
    const token = localStorage.getItem("auth");
    const decodedUser = jwtDecode(token);
    const userNameFirstLetter = decodedUser.name[0].toUpperCase();
    setNameFirstLetter(userNameFirstLetter);

    document.addEventListener("click", closeModal);

    return () => {
      document.removeEventListener("click", closeModal);
    };
  }, []);

  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem("auth");
  };

  const changeModalState = () => {
    if (modalRef.current.classList.contains("active")) {
      return modalRef.current.classList.remove("active");
    }

    modalRef.current.classList.add("active");
  };

  const closeModal = (e) => {
    const target = e.target;
    const modal = target.closest("modal__options");

    if (!modal && target !== avatarRef.current) {
      modalRef.current.classList.remove("active");
    }
  };

  return (
    <div className="user__container">
      <div className="avatar" onClick={changeModalState} ref={avatarRef}>
        {nameFirstLetter}
      </div>
      <div className="modal__options" ref={modalRef}>
        <Link to={"/orders"} className="btn">
          Мои заказы
        </Link>
        <Link to={"/"} onClick={logout} className="btn">
          Выйти
        </Link>
      </div>
    </div>
  );
};

export default UserAvatar;
