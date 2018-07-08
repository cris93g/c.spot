import React from "react";
import { Switch, Route } from "react-router-dom";
import Containers from "./components/Containers/containers";
import Items from "./components/ITEMS/Items";
export default (
  <Switch>
    <Route component={Containers} exact path="/" />
    <Route component={Items} path="/laptops" />
  </Switch>
);
