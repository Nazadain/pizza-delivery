import { useEffect, useState, useRef, useContext } from "react";
import { useFetching } from "../hooks/useFetching";
import TypeAPI from "../http/TypeAPI";
import "../styles/Shop.css";
import ShopNav from "../components/UI/shop-navbar/ShopNav";
import Cart from "../components/UI/cart/Cart";
import ShopContainer from "../components/ShopContainer";
import { CartContext } from "../context";

const Shop = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [types, setTypes] = useState([]);
  const cartProducts = useContext(CartContext);
  const observer = useRef(null);
  const [fetchTypes, isTypeLoading, typeError] = useFetching(async () => {
    const typesData = await TypeAPI.getAll();
    setTypes(typesData);
  });

  useEffect(() => {
    fetchTypes();
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

    sections.forEach((section) => {
      observer.current.observe(section);
    });
    observer.current.observe(header);

    return () => {
      observer.current.unobserve(header);
      sections.forEach((section) => {
        observer.current.unobserve(section);
      });
    };
  }, [fetchTypes]);

  const cartBtnHandler = (value) => {
    if (value === "cart") {
      return setIsCartOpen(false);
    }
    if (isCartOpen === false) {
      setIsCartOpen(value);
    } else {
      setIsCartOpen(false);
    }
  };

  return (
    <>
      {isTypeLoading ? (
        <div className="loading__type"></div>
      ) : (
        <ShopNav
          active={activeSection}
          types={types}
          onClick={cartBtnHandler}
        />
      )}
      <Cart isCartOpen={isCartOpen} />
      <div
        className={`cart__fade ${isCartOpen ? "fade__active" : ""}`}
        onClick={cartBtnHandler}
      ></div>
      <div className="slider">
        <div className="background__filter"></div>
      </div>
      {isTypeLoading ? (
        <div className="loading__type"></div>
      ) : (
        <ShopContainer types={types} />
      )}
    </>
  );
};

export default Shop;
