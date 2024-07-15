import { useEffect, useRef } from "react";
import ProductList from "./ProductList";

const ProductSections = ({ types, products }) => {
  if (!types || !products) {
    return <h2>Товары не найдены!</h2>;
  }

  return (
    <div className="product__sections">
      {types.map((type) => (
        <section key={type.id} className="section" id={type.anchor}>
          <h2 className="section__title">{type.title}</h2>
          <ProductList type={type} products={products} />
        </section>
      ))}
    </div>
  );
};

export default ProductSections;
