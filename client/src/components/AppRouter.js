import { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Context } from "../index";
import Admin from "../pages/Admin";
import { authRoutes, publicRoutes } from "../pages/routes";
import { SHOP_ROUTE } from "../utils/constants";

const AppRouter = () => {
  const { user } = useContext(Context);

  return (
    <Switch>
      {user.isAuth &&
        authRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} component={Component} exact />
        ))}
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} component={Component} exact />
      ))}

      <Redirect to={SHOP_ROUTE} />
    </Switch>
  );
};

export default AppRouter;