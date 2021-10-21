import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import { ProtectedRoute } from "../components/ProtectedRoutes";

const Authentication = React.lazy(() => import("../pages/Authentication"));
const Account = React.lazy(() => import("../pages/Account"));
const Home = React.lazy(() => import("../pages/home"));

export default function Routes() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route path="/" exact component={Authentication} />
        <ProtectedRoute path="/account/:personId" exact component={Account} />
        <ProtectedRoute path="/home" exact component={Home} />
      </Switch>
    </Suspense>
  );
}
