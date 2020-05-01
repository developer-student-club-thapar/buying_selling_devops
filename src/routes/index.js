import React from "react";
import { Switch } from "react-router-dom";
import test from "../pages/test";
import PrivateTest from "../pages/PrivateTest";
import Route from "./Route";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={test} />
      <Route exact path="/private" component={PrivateTest} isPrivate />
      <Route component={test} />
    </Switch>
  );
};

export default Routes;
