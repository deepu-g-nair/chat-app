import React from "react";

import "rsuite/dist/styles/rsuite-default.css";
import "./styles/main.scss";
import { BrowserRouter, Switch } from "react-router-dom";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <PublicRoute path={"/signin"}>
          <SignIn />
        </PublicRoute>
        <PrivateRoute>
          <Home />
        </PrivateRoute>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
