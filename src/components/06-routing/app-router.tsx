import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { RouteDefinition, routes } from "routes";

/**
 * Utility component to wrap up the React Router markup.
 */
export const AppRouter: React.FC = () => (
  <Router>
    <Switch>
      {routes.map((route: RouteDefinition) => (
        <Route path={route.path} key={route.path}>
          <route.component />
        </Route>
      ))}
    </Switch>
  </Router>
);
