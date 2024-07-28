import Title from "../../components/UI/Title/Title";
import "./Error.css";

const Error = ({ ...props }) => {
  return (
    <div className="error__container">
      <Title variant="h1">Ошибка 404</Title>
    </div>
  );
};

export default Error;
