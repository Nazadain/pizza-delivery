const ProductList = ({ type, products, onClick }) => {
  const productClickHandler = (e) => {
    const product = e.target.closest(".product__list__item");

    const productId = product.getAttribute("data-id");

    products.forEach((product) => {
      if (product.id === productId) {
        onClick(product);
      }
    });
  };

  return (
    <div className="product__list">
      {products.map(
        (product) =>
          product.type_id === type.id && (
            <div
              key={product.id}
              className="product__list__item"
              data-id={product.id}
              onClick={productClickHandler}
            >
              <div className="product__header">
                <div className="image">
                  <img src={`${process.env.REACT_APP_API_URL}${product.img}`} />
                </div>
                <h4 className="title">{product.title}</h4>
                <p className="body">{product.body}</p>
              </div>

              <div className="product__footer">
                <p className="price">{product.price}₽</p>
                <div className="cart__add--btn">В корзину</div>
              </div>
            </div>
          )
      )}
    </div>
  );
};

export default ProductList;
