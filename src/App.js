import React from "react";
import "./App.css";

import HomePage from "./components/pages/homepage/homepage.component";
import { Route, Switch } from "react-router";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
