import Title from "../../../../components/UI/Title/Title";
import "./ProductList.css";

const ProductList = ({ fullPrice, cartProducts, ...props }) => {
  return (
    <div className="compound">
      <Title variant="h2" className="title">
        Состав
      </Title>
      <div className="product__list">
        {cartProducts.map((p) => (
          <div id={p.id} className="product" key={p.id}>
            <p className="title">{p.title}</p>
            <p className="quantity">{p.quantity}</p>
            <p className="price">{p.price}₽</p>
          </div>
        ))}
      </div>
      <div className="full__price">
        <p className="text">Итого</p>
        <p className="price">{fullPrice}₽</p>
      </div>
    </div>
  );
};

export default ProductList;
