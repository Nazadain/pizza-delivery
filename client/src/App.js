import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import { AuthContext } from "./context";
import { CartContext } from "./context";
import "./styles/App.css";
import "./styles/fonts.css";
import NavBar from "./components/UI/general-navbar/NavBar";
import Footer from "./components/UI/footer/Footer";

const App = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [cartProducts, setCartProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("isAuth")) {
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
      <CartContext.Provider value={cartProducts}>
        <BrowserRouter>
          <NavBar />
          <AppRouter />
          <Footer />
        </BrowserRouter>
      </CartContext.Provider>
    </AuthContext.Provider>
  );
};

export default App;
