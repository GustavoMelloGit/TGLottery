import React from "react";
import { Route, Redirect, RouteProps } from "react-router";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
interface PrivateRouteProps extends RouteProps {}

export const ProtectedRoute: React.FC<PrivateRouteProps> = ({ ...rest }) => {
  const userAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );
  if (userAuthenticated) {
    return <Route {...rest} />;
  }
  return <Redirect to="/" />;
};
