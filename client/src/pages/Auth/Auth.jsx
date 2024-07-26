import { useLocation } from "react-router-dom";
import Title from "../../components/UI/Title/Title";
import "./Auth.css";
import LoginForm from "./Components/LoginForm/LoginForm";
import RegistrationForm from "./Components/RegistrationForm/RegistrationForm";

const Auth = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";

  return (
    <>
      <div className="container">
        <div className="user__modal">
          <Title variant="h1">
            {isLoginPage ? "Авторизация" : "Регистрация"}
          </Title>

          {isLoginPage ? <LoginForm /> : <RegistrationForm />}
        </div>
      </div>
    </>
  );
};

export default Auth;
