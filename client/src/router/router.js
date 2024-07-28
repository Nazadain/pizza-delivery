import Admin from "../pages/Admin";
import About from "../pages/About";
import Auth from "../pages/Auth/Auth";
import Shop from "../pages/Shop";
import Order from "../pages/Order";
import Manager from "../pages/Manager";
import Courier from "../pages/Courier";
import Contacts from "../pages/Contacts";
import Kitchen from "../pages/Kitchen";
import UserOrders from "../pages/UserOrders/UserOrders";
import Error from "../pages/Error/Error";

export const privateRoutes = [
  { path: "/order", element: <Order />, exact: true },
  { path: "/orders", element: <UserOrders />, exact: true },
  { path: "/admin", element: <Admin />, exact: true },
  { path: "/manager", element: <Manager />, exact: true },
  { path: "/courier", element: <Courier />, exact: true },
  { path: "/kitchen", element: <Kitchen />, exact: true },
  { path: "*", element: <Error />, exact: true },
];

export const publicRoutes = [
  { path: "/", element: <Shop />, exact: true },
  { path: "/registration", element: <Auth />, exact: true },
  { path: "/login", element: <Auth />, exact: true },
  { path: "/about", element: <About />, exact: true },
  { path: "/contacts", element: <Contacts />, exact: true },
  { path: "*", element: <Error />, exact: true },
];
