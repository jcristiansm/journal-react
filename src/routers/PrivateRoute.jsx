import React from "react";
import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({
  isAuthenticated,
  component: Component,
  ...otherRouteProps
}) => {
  
  return (
    <Route
      {...otherRouteProps}
      component={(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRoute;
