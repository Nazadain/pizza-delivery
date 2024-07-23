import { memo, useContext, useEffect, useState } from "react";
import { useFetching } from "../../hooks/useFetching";
import ProductAPI from "../../http/ProductAPI";
import { TypeContext } from "../../pages/Shop";
import Title from "../UI/Title/Title";
import ProductList from "./Components/ProductList/ProductList";
import "./ProductSections.css";

const ProductSections = memo(({ addToCartClick, ...props }) => {
  const [types, setTypes] = useContext(TypeContext);
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

  return (
    <div className="container">
      {types.map((type, i) => (
        <section
          className="product__section"
          id={type.anchor}
          key={type.id}
          ref={(el) => (props.forwardRef.current[i] = el)}
        >
          <Title variant="h2" className="title">
            {type.title}
          </Title>

          <ProductList
            products={products}
            typeId={type.id}
            addToCartClick={addToCartClick}
          />
        </section>
      ))}
    </div>
  );
});

export default ProductSections;
