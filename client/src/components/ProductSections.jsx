import { useEffect, useRef, useState } from "react";
import { useFetching } from "../hooks/useFetching";
import ProductList from "./ProductList";
import LoadProducts from "./UI/load-products/LoadProducts";
import ProductAPI from "../http/ProductAPI";

const ProductSections = ({ types, onClick }) => {
  const [products, setProducts] = useState([]);
  const [fetchProducts, isProductLoading, productError] = useFetching(
    async () => {
      const productsData = await ProductAPI.getAll();
      setProducts(productsData);
    }
  );
  useEffect(() => {
    fetchProducts();
  }, []);

  if (!types || !products) {
    return <h2>Товары не найдены!</h2>;
  }

  return (
    <div className="product__sections">
      {types.map((type) => (
        <section key={type.id} className="section" id={type.anchor}>
          <h2 className="section__title">{type.title}</h2>
          {isProductLoading ? (
            <LoadProducts />
          ) : (
            <ProductList type={type} products={products} onClick={onClick} />
          )}
        </section>
      ))}
    </div>
  );
};

export default ProductSections;
