import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import { ProtectedRoute } from "../components/ProtectedRoute";
import Loading from "../pages/Loading";
import NotFound from "../pages/NotFound";

const Authentication = React.lazy(() => import("../pages/Authentication"));
const Account = React.lazy(() => import("../pages/Account"));
const Home = React.lazy(() => import("../pages/home"));

export default function Routes(): JSX.Element {
  return (
    <Suspense fallback={<Loading />}>
      <Switch>
        <Route path="/" exact component={Authentication} />
        <ProtectedRoute path="/account/:personId" exact component={Account} />
        <ProtectedRoute path="/home" exact component={Home} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Suspense>
  );
}
