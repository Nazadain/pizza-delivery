const ProductList = ({ products }) => {
  if (!products) {
    return <h2>Товары не найдены!</h2>;
  }

  return (
    <div className="product__list">
      {products.map((product) => (
        <div key={product.id} className="product__list__item">
          <img src={`http://localhost:5000/${product.img}`} alt="Фото товара" />
          <h4>{product.title}</h4>
          <p>{product.body}</p>
          <h5>{product.price}р</h5>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
