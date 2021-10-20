import React, { Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { ProtectedRoute } from "../components/ProtectedRoutes";

const Authentication = React.lazy(() => import("../pages/Authentication"));
const Home = React.lazy(() => import("../pages/home"));

export default function Routes() {
  console.log("to aqui");
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route path="/" exact component={Authentication} />
        <ProtectedRoute path="/home" exact component={Home} />
      </Switch>
    </Suspense>
  );
}
