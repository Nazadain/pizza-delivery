import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { AuthContext } from "../context";
import { privateRoutes, publicRoutes } from "../router/router";

const AppRouter = () => {
  const [isAuth, setIsAuth, isLoading] = useContext(AuthContext);

  if (isLoading) return <></>;

  return (
    <Routes>
      {isAuth &&
        privateRoutes.map((route) => (
          <Route
            exact={route.exact}
            path={route.path}
            element={route.element}
            key={route.path}
          />
        ))}
      {publicRoutes.map((route) => (
        <Route
          exact={route.exact}
          path={route.path}
          element={route.element}
          key={route.path}
        />
      ))}
    </Routes>
  );
};

export default AppRouter;
