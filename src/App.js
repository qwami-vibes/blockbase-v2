import React from "react";
import { Route, Switch } from "react-router";

import Signin from "./auth/Signin";
import Dashboard from "./pages/Dashboard";
import GlobalStyles from "./components/GlobalStyles";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Switch>
        <Route exact path="/" component={Signin} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </div>
  );
}

export default App;
