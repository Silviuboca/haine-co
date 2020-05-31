import React from "react";
import "./App.css";
import ShopPage from "./components/pages/shop/shop.component";

import HomePage from "./components/pages/homepage/homepage.component";
import { Route, Switch } from "react-router";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
