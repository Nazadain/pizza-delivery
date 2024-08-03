import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { AuthContext, CartContext } from "./context";
import "./styles/App.css";
import "./styles/fonts.css";
import ActiveOrders from "./components/CurrentOrders/ActiveOrders";

const App = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [cartProducts, setCartProducts] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("auth")) {
      setIsAuth(true);
    }
    const cartData = JSON.parse(localStorage.getItem("cart"));
    setCartProducts(cartData);

    if (!cartData) {
      setCartProducts([]);
    }
    setIsLoading(false);
  }, []);

  return (
    <AuthContext.Provider value={[isAuth, setIsAuth, isLoading]}>
      <CartContext.Provider
        value={[
          [cartProducts, setCartProducts],
          [isCartOpen, setIsCartOpen],
        ]}
      >
        <BrowserRouter>
          <Header />
          <AppRouter />
          <Footer />
        </BrowserRouter>
      </CartContext.Provider>
    </AuthContext.Provider>
  );
};

export default App;
