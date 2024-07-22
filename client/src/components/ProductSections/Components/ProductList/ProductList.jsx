import { memo } from "react";
import Product from "../Product/Product";
import "./ProductList.css";

const ProductList = memo(({ products, typeId, addToCartClick, ...props }) => {
  return (
    <div className="product__list">
      {products.map(
        (p) =>
          p.type_id === typeId && (
            <Product key={p.id} product={p} addToCartClick={addToCartClick} />
          )
      )}
    </div>
  );
});

export default ProductList;
