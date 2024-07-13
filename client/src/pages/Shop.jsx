import React, { useEffect, useState } from "react";
import ProductList from "../components/ProductList";
import { useFetching } from "../hooks/useFetching";
import ProductAPI from "../http/ProductAPI";
import "../styles/Shop.css";
import ShopNav from "../components/UI/shop-navbar/ShopNav";

const Shop = () => {
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
    <div>
      <ShopNav />
      <div className="slider">
        <div className="background__filter"></div>
      </div>

      <div className="container">
        <h1 className="section__title" id="combo">
          Комбо
        </h1>
        {isProductLoading ? (
          <h2>Загрузка...</h2>
        ) : (
          <ProductList products={products} />
        )}
      </div>
    </div>
  );
};

export default Shop;
