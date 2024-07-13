import { Routes, Route } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../router/router";

const AppRouter = () => {
  const isAuth = true;

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
