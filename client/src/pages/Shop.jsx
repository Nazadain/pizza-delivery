import { createContext, useContext, useEffect, useRef, useState } from "react";
import CartContainer from "../components/CartContainer/CartContainer";
import ModalProduct from "../components/ModalProduct/ModalProduct";
import ProductSections from "../components/ProductSections/ProductSections";
import ShopHeader from "../components/ShopHeader/ShopHeader";
import Slider from "../components/Slider/Slider";
import { CartContext } from "../context";
import { useFetching } from "../hooks/useFetching";
import { useObserver } from "../hooks/useObserver";
import TypeAPI from "../http/TypeAPI";

export const TypeContext = createContext(null);
export const ModalContext = createContext(null);

const Shop = () => {
  const [activeSection, setActiveSection] = useState();
  const [modalData, setModalData] = useState(null);
  const [cartProducts, setCartProducts] = useContext(CartContext)[0];
  const [types, setTypes] = useState([]);
  const sectionsRef = useRef([]);
  const [fetchTypes, isTypeLoading, typeError] = useFetching(async () => {
    const typesData = await TypeAPI.getAll();
    setTypes(typesData);
  });
  const options = {
    threshold: 0.5,
  };

  useEffect(() => {
    fetchTypes();
  }, []);

  useObserver(sectionsRef, isTypeLoading, options, (visibleElement) => {
    const sections = sectionsRef.current;

    const isFirstSection = activeSection !== sections[0];
    const isLastSection = activeSection !== sections[sections.length];

    if (!visibleElement && (isFirstSection || isLastSection)) {
      return setActiveSection(null);
    }
    setActiveSection(visibleElement.id);
  });

  const addToCart = (product) => {
    if (cartProducts.includes(product)) {
      const cartItem = cartProducts.filter((p) => p.id === product.id)[0];
      const itemIndex = cartProducts.indexOf(cartItem);

      const newCartProducts = cartProducts;
      newCartProducts[itemIndex].quantity += 1;

      setCartProducts(newCartProducts);
      return localStorage.setItem("cart", JSON.stringify(newCartProducts));
    }

    product.quantity = 1;
    const newCartProducts = [...cartProducts, product];
    localStorage.setItem("cart", JSON.stringify(newCartProducts));
    setCartProducts(newCartProducts);
  };

  return (
    <ModalContext.Provider value={[modalData, setModalData]}>
      <ShopHeader
        active={activeSection}
        types={types}
        isLoading={isTypeLoading}
      />

      <Slider />

      <TypeContext.Provider value={[types, setTypes]}>
        <ProductSections addToCartClick={addToCart} />
      </TypeContext.Provider>

      <CartContainer />

      <ModalProduct addToCartClick={addToCart} />
    </ModalContext.Provider>
  );
};

export default Shop;
