import React, { useEffect, useState, useRef } from "react";
import ProductSections from "../components/ProductSections";
import { useFetching } from "../hooks/useFetching";
import TypeAPI from "../http/TypeAPI";
import ProductAPI from "../http/ProductAPI";
import "../styles/Shop.css";
import ShopNav from "../components/UI/shop-navbar/ShopNav";

const Shop = () => {
  const [activeSection, setActiveSection] = useState(null);
  const observer = useRef(null);
  const [types, setTypes] = useState([]);
  const [products, setProducts] = useState([]);
  const [fetchTypes, isTypeLoading, typeError] = useFetching(async () => {
    const typesData = await TypeAPI.getAll();
    setTypes(typesData);
  });
  const [fetchProducts, isProductLoading, productError] = useFetching(
    async () => {
      const productsData = await ProductAPI.getAll();
      setProducts(productsData);
    }
  );

  useEffect(() => {
    fetchTypes();
    fetchProducts();
  }, []);

  useEffect(() => {
    let options = {
      threshold: 0.5,
    };
    observer.current = new IntersectionObserver((entries) => {
      const visibleSection = entries.find(
        (entry) => entry.isIntersecting
      )?.target;

      if (visibleSection) {
        setActiveSection(visibleSection.id);
      }
    }, options);
    const sections = document.querySelectorAll(".section");
    const header = document.querySelector(".header");

    observer.current.observe(header);

    sections.forEach((section) => {
      observer.current.observe(section);
    });

    return () => {
      observer.current.unobserve(header);
      sections.forEach((section) => {
        observer.current.unobserve(section);
      });
    };
  }, [fetchTypes, fetchProducts]);

  return (
    <>
      {isTypeLoading ? (
        <p></p>
      ) : (
        <ShopNav active={activeSection} types={types} />
      )}

      <div className="slider">
        <div className="background__filter"></div>
      </div>

      <div className="container">
        {isTypeLoading || isProductLoading ? (
          <h2>Загрузка...</h2>
        ) : (
          <ProductSections types={types} products={products} />
        )}
      </div>
    </>
  );
};

export default Shop;
